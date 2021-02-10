using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Razmova.Domain.LawProjects;

namespace Razmova.Domain.Interfaces.Data.Repositories
{
    public interface IDraftLawRepository
    {
        Task<DraftLaw> GetByIdAsync(Guid id);
        Task<IList<DraftLaw>> GetAllAsync();
        Task<DraftLaw> AddAsync(DraftLaw entity);
    }
}
