using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using Razmova.Domain.Companies;
using Razmova.Domain.Interfaces.Data.Repositories;
using Razmova.Domain.LawProjects;
using Razmova.Domain.Tags;
using Razmova.Domain.Users;
using Razmova.Dto.DraftLaws;
using Razmova.Services.Interfaces;

namespace Razmova.Application.Services.DraftLaws
{
    public class DraftLawService : IDraftLawService
    {
        private readonly IDraftLawRepository _draftLawRepository;
        private readonly IDraftLawDocumentRepository _draftLawDocumentRepository;
        private readonly IDraftLawCategoryRepository _draftLawCategoryRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        private readonly ITagRepository _tagRepository;

        public DraftLawService(
            IDraftLawRepository draftLawRepository,
            IDraftLawDocumentRepository draftLawDocumentRepository,
            IDraftLawCategoryRepository draftLawCategoryRepository,
            IUserProfileRepository userProfileRepository,
            ITagRepository tagRepository)
        {
            _draftLawRepository = draftLawRepository;
            _draftLawDocumentRepository = draftLawDocumentRepository;
            _draftLawCategoryRepository = draftLawCategoryRepository;
            _userProfileRepository = userProfileRepository;
            _tagRepository = tagRepository;
        }

        public async Task<IList<DraftLaw>> GetAllAsync()
        {
            return await _draftLawRepository.GetAllAsync();
        }

        public async Task<DraftLaw> CreateNewAsync(NewDraftLawRequestModel model)
        {
            var draftLaw = new DraftLaw
            {
                IsNew = model.IsNew,
                Type = model.Type,
                Name = model.Name,
                Description = model.Description,
                ParentDraftLaw = await GetOrCreateParent(model),
                Document = await GetOrCreateDocumentAsync(model),
                Category = await GetExistingCategoryAsync(model),
                Tags = await GetOrCreateTagsAsync(model),
                Participants = await GetOrCreateParticipantsAsync(model)
            };

            return await _draftLawRepository.AddAsync(draftLaw);
        }

        private async Task<DraftLaw> GetOrCreateParent(NewDraftLawRequestModel model)
        {
            if (model.IsNew)
            {
                return null;
            }

            if (!model.ParentDraftLaw.Id.HasValue)
            {
                return new DraftLaw
                {
                    Name = model.Name,
                    Description = model.Description
                };
            }

            var bill = await _draftLawRepository.GetByIdAsync(model.ParentDraftLaw.Id.Value);

            if (bill == null)
            {
                throw new ValidationException("Couldn't find parent draw law");
            }

            return bill;
        }

        private async Task<DraftLawDocument> GetOrCreateDocumentAsync(NewDraftLawRequestModel model)
        {
            if (!model.InternalFileId.HasValue)
            {
                return new DraftLawDocument
                {
                    DirectLink = model.ExternalLink
                };
            }

            var document = await _draftLawDocumentRepository.GetByIdAsync(model.InternalFileId.Value);

            if (document == null)
            {
                throw new ValidationException("Couldn't find internal file");
            }

            return document;
        }

        private async Task<DraftLawCategory> GetExistingCategoryAsync(NewDraftLawRequestModel model)
        {
            DraftLawCategory category = null;

            if (model.CategoryId.HasValue)
            {
                category = await _draftLawCategoryRepository.GetByIdAsync(model.CategoryId.Value);
            }

            if (category == null && !string.IsNullOrWhiteSpace(model.CategoryName))
            {
                category = await _draftLawCategoryRepository.GetByNameAsync(model.CategoryName);
            }

            if (category == null)
            {
                throw new ValidationException("Couldn't find category");
            }

            return category;
        }

        private async Task<IList<Tag>> GetOrCreateTagsAsync(NewDraftLawRequestModel model)
        {
            var stored = await _tagRepository.GetAsync(model.Tags);
            var tags = model.Tags
                .Where(x => stored.All(s => s.Name != x))
                .Select(x => new Tag { Name = x })
                .ToList();

            tags.AddRange(stored);

            return tags;
        }

        private async Task<IList<ProjectParticipant>> GetOrCreateParticipantsAsync(NewDraftLawRequestModel model)
        {
            var emails = model.Participants
                .Concat(model.Initiators)
                .Where(x => IsEmail(x.NameOrEmail))
                .Select(x => x.NameOrEmail)
                .Distinct()
                .ToList();

            var savedUsersParticipants = await _userProfileRepository.GetByEmails(emails);
            var participantList = new List<ProjectParticipant>();

            foreach (var participant in model.Participants)
            {
                AddParticipant(participantList, savedUsersParticipants, participant, false);
            }

            foreach (var participant in model.Initiators)
            {
                AddParticipant(participantList, savedUsersParticipants, participant, true);
            }

            return participantList;
        }

        private void AddParticipant(List<ProjectParticipant> participants, IList<UserProfile> correspondingProfiles,
            NewParticipant newParticipant, bool isInitiator)
        {
            var correspondingUserProfile =
                correspondingProfiles.FirstOrDefault(x => x.ApplicationUser.Email == newParticipant.NameOrEmail);

            if (correspondingUserProfile != null && correspondingUserProfile.Employments.Count == 0)
            {
                correspondingUserProfile.Employments.Add(new Employment { Position = newParticipant.JobPosition });
            }

            if (correspondingUserProfile == null)
            {
                correspondingUserProfile = new UserProfile
                {
                    FirstName = newParticipant.NameOrEmail,
                    ApplicationUser = new ApplicationUser { UserName = newParticipant.NameOrEmail },
                    Employments = new List<Employment> { new Employment { Position = newParticipant.JobPosition } }
                };
            }

            participants.Add(new ProjectParticipant
            {
                NameOrEmail = newParticipant.NameOrEmail,
                UserProfile = correspondingUserProfile,
                IsInitiator = isInitiator
            });
        }

        private static bool IsEmail(string value)
        {
            try
            {
                MailAddress address = new MailAddress(value);
                return address.Address == value;
            }
            catch (FormatException)
            {
                return false;
            }
        }
    }
}
