using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Razmova.Domain.Interfaces.Data.Repositories;
using Razmova.Domain.LawProjects;

namespace Razmova.Data.Repositories
{
    public class DraftLawRepository : BaseRepository<DraftLaw>, IDraftLawRepository
    {
        public DraftLawRepository(RazmovaDbContext context) : base(context)
        {
        }

        protected override IQueryable<DraftLaw> Entities => Context.DraftLaws.AsNoTracking();

        public async Task<IList<DraftLaw>> GetAllAsync()
        {
            return await Entities
                .Include(x => x.ParentDraftLaw)
                .Include(x => x.Document)
                .Include(x => x.Category)
                .Include(x => x.Tags)
                .Include(x => x.Participants)
                .ToListAsync();
        }
    }
}
