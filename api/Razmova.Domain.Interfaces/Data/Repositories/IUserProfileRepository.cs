using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Razmova.Domain.Users;

namespace Razmova.Domain.Interfaces.Data.Repositories
{
    public interface IUserProfileRepository
    {
        Task<UserProfile> GetByIdAsync(Guid id);

        Task<IList<UserProfile>> GetByEmails(IList<string> emails);
    }
}
