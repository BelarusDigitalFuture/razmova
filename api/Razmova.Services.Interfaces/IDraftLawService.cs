using System.Collections.Generic;
using System.Threading.Tasks;
using Razmova.Domain.LawProjects;
using Razmova.Dto.DraftLaws;

namespace Razmova.Services.Interfaces
{
    public interface IDraftLawService
    {
        Task<DraftLaw> CreateNewAsync(NewDraftLawRequestModel model);
        Task<IList<DraftLaw>> GetAllAsync();
    }
}
