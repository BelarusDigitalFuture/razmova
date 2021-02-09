using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Razmova.Domain.Interfaces.Data.Repositories;
using Razmova.Domain.Users;

namespace Razmova.Data.Repositories
{
    public class UserProfileRepository : BaseRepository<UserProfile>, IUserProfileRepository
    {
        public UserProfileRepository(RazmovaDbContext context) : base(context)
        {
        }

        protected override IQueryable<UserProfile> Entities => Context.UserProfiles.Include(x => x.ApplicationUser).AsNoTracking();
       
        public async Task<IList<UserProfile>> GetByEmails(IList<string> emails)
        {
            return await Context.UserProfiles
                .Include(x => x.ApplicationUser)
                .Include(x => x.Employments)
                .Where(x => emails.Contains(x.ApplicationUser.Email))
                .ToListAsync();
        }
    }
}
