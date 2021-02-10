using System.Collections.Generic;
using System.Threading.Tasks;
using Razmova.Domain.Interfaces.Data.Repositories;
using Razmova.Domain.LawProjects;
using Razmova.Services.Interfaces;

namespace Razmova.Application.Services.DraftLaws
{
    public class DraftLawCategoryService : IDraftLawCategoryService
    {
        private readonly IDraftLawCategoryRepository _repository;

        public DraftLawCategoryService(IDraftLawCategoryRepository repository)
        {
            _repository = repository;
        }

        public async Task<DraftLawCategory> AddAsync(DraftLawCategory category)
        {
            return await _repository.AddAsync(category);
        }

        public async Task<IList<DraftLawCategory>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }
    }
}
