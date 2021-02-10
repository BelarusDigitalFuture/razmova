using System;
using System.Threading.Tasks;
using Razmova.Domain.LawProjects;

namespace Razmova.Domain.Interfaces.Data.Repositories
{
    public interface IDraftLawDocumentRepository
    {
        Task<DraftLawDocument> GetByIdAsync(Guid id);
    }
}
