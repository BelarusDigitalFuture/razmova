using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Razmova.Domain.Interfaces.Data.Repositories;
using Razmova.Domain.Tags;

namespace Razmova.Data.Repositories
{
    public class TagRepository : BaseRepository<Tag>, ITagRepository
    {
        public TagRepository(RazmovaDbContext context) : base(context)
        {
        }

        protected override IQueryable<Tag> Entities => Context.Tag;

        public async Task<IList<Tag>> GetAsync(IList<string> tags)
        {
            return await Entities.Where(x => tags.Contains(x.Name)).ToListAsync();
        }
    }
}
