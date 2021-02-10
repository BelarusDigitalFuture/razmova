using System;
using System.Threading.Tasks;
using Razmova.Domain.Users;

namespace Razmova.Services.Interfaces
{
    public interface IUserService
    {
        Task<UserProfile> GetUserAsync(Guid userId);
    }
}
