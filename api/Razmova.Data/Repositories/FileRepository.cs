using System.Linq;
using Microsoft.EntityFrameworkCore;
using Razmova.Domain.Documents;
using Razmova.Domain.Interfaces.Data.Repositories;

namespace Razmova.Data.Repositories
{
    public class FileRepository : BaseRepository<File>, IFileRepository
    {
        protected override IQueryable<File> Entities => Context.Set<File>().Include(e => e.Author).AsNoTracking();

        public FileRepository(RazmovaDbContext context) : base(context)
        {
        }
    }
}
