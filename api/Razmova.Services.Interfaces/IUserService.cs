using System;
using System.Threading.Tasks;
using Razmova.Domain.Users;
using Razmova.Dto.Users;

namespace Razmova.Services.Interfaces
{
    public interface IUserService
    {
        Task<UserProfile> GetProfileAsync(Guid userId);
        Task<UserDetails> GetDetailsAsync(Guid userId);
    }
}
