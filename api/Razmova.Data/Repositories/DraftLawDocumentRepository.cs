using System.Linq;
using Razmova.Domain.Interfaces.Data.Repositories;
using Razmova.Domain.LawProjects;

namespace Razmova.Data.Repositories
{
    public class DraftLawDocumentRepository : BaseRepository<DraftLawDocument>, IDraftLawDocumentRepository
    {
        public DraftLawDocumentRepository(RazmovaDbContext context) : base(context)
        {
        }

        protected override IQueryable<DraftLawDocument> Entities => Context.DraftLawDocuments;
    }
}
