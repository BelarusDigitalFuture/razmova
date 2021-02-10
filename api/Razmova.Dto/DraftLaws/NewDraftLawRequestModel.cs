using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Razmova.Domain.DataAnnotations;
using Razmova.Domain.Documents;

namespace Razmova.Dto.DraftLaws
{
    public class NewDraftLawRequestModel
    {
        public bool IsNew { get; set; }

        [RequiredIf(nameof(IsNew), false, "A parental draft law is required for laws based on existing ones.")]
        public RelatedDraftLaw ParentDraftLaw { get; set; }

        public DraftLawType Type { get; set; }

        [RequiredIf(nameof(ExternalLink), null, "The document must be assigned to an internal file or be linked to an external one.")]
        public Guid? InternalFileId { get; set; }

        [RequiredIf(nameof(InternalFileId), null, "The document must be assigned to an internal file or be linked to an external one.")]
        public string ExternalLink { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        public string CategoryName { get; set; }

        public Guid? CategoryId { get; set; }

        public IList<string> Tags { get; set; }

        public IList<NewParticipant> Participants { get; set; }
    }
}
