using System;
using System.Threading.Tasks;
using Razmova.Domain.Interfaces.Data.Repositories;
using Razmova.Domain.Users;
using Razmova.Services.Interfaces;

namespace Razmova.Application.Services.Users
{
    public class UserService : IUserService
    {
        private readonly IUserProfileRepository _userProfileRepository;

        public UserService(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        public async Task<UserProfile> GetUserAsync(Guid userId)
        {
            return await _userProfileRepository.GetByIdAsync(userId);
        }
    }
}
