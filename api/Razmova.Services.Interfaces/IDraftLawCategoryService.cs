using System.Collections.Generic;
using System.Threading.Tasks;
using Razmova.Domain.LawProjects;

namespace Razmova.Services.Interfaces
{
    public interface IDraftLawCategoryService
    {
        Task<DraftLawCategory> AddAsync(DraftLawCategory category);
        Task<IList<DraftLawCategory>> GetAllAsync();
    }
}
