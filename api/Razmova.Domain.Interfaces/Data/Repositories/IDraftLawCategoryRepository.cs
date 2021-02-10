using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Razmova.Domain.LawProjects;

namespace Razmova.Domain.Interfaces.Data.Repositories
{
    public interface IDraftLawCategoryRepository
    {
        Task<DraftLawCategory> GetByIdAsync(Guid id);

        Task<DraftLawCategory> GetByNameAsync(string name);
        
        Task<DraftLawCategory> AddAsync(DraftLawCategory entity);

        Task<IList<DraftLawCategory>> GetAllAsync();
    }
}
