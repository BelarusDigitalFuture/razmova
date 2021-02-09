using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Razmova.Domain.LawProjects;
using Razmova.Dto.DraftLaws;
using Razmova.Services.Interfaces;

namespace Razmova.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class DraftLawsController : ApiControllerBase
    {
        private readonly IDraftLawService _service;

        public DraftLawsController(IDraftLawService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<DraftLaw> CreateNewDrawLaw(NewDraftLawRequestModel model)
        {
            return await _service.CreateNewAsync(model);
        }


        [HttpGet("all")]
        public async Task<IList<DraftLaw>> GetAll()
        {
            return await _service.GetAllAsync();
        }
    }
}
