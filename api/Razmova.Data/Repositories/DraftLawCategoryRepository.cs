using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Razmova.Domain.Interfaces.Data.Repositories;
using Razmova.Domain.LawProjects;

namespace Razmova.Data.Repositories
{
    public class DraftLawCategoryRepository : BaseRepository<DraftLawCategory>, IDraftLawCategoryRepository
    {
        public DraftLawCategoryRepository(RazmovaDbContext context) : base(context)
        {
        }

        protected override IQueryable<DraftLawCategory> Entities => Context.DraftLawCategories;

        public async Task<DraftLawCategory> GetByNameAsync(string name)
        {
            return await Entities.SingleOrDefaultAsync(x => x.Name == name);
        }

        public async Task<IList<DraftLawCategory>> GetAllAsync()
        {
            return await Entities.ToListAsync();
        }
    }
}
