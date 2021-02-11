using System;
using System.Threading.Tasks;
using AutoMapper;
using Razmova.Domain.Interfaces.Data.Repositories;
using Razmova.Domain.Users;
using Razmova.Dto.Users;
using Razmova.Services.Interfaces;

namespace Razmova.Application.Services.Users
{
    public class UserService : IUserService
    {
        private readonly IUserProfileRepository _userProfileRepository;
        private readonly IMapper _mapper;

        public UserService(IUserProfileRepository userProfileRepository, IMapper mapper)
        {
            _userProfileRepository = userProfileRepository;
            _mapper = mapper;
        }

        public async Task<UserProfile> GetProfileAsync(Guid userId)
        {
            return await _userProfileRepository.GetByIdAsync(userId);
        }

        public async Task<UserDetails> GetDetailsAsync(Guid userId)
        {
            var profile = await _userProfileRepository.GetByIdAsync(userId);
            return _mapper.Map<UserDetails>(profile);
        }
    }
}
