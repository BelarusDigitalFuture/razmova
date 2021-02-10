using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Razmova.Domain.LawProjects;
using Razmova.Services.Interfaces;

namespace Razmova.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class DraftLawCategoryController : ApiControllerBase
    {
        private readonly IDraftLawCategoryService _service;

        public DraftLawCategoryController(IDraftLawCategoryService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<DraftLawCategory> SaveNew(DraftLawCategory model)
        {
            return await _service.AddAsync(model);
        }

        [HttpGet("list")]
        public async Task<IList<DraftLawCategory>> GetList()
        {
            return await _service.GetAllAsync();
        }
    }
}
