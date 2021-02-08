using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Razmova.WebApi.Controllers
{
    [ApiController]
    [Authorize]
    [Route("[controller]")]
    public class IsAliveController : ApiControllerBase
    {
        [HttpGet]
        [AllowAnonymous]
        public IActionResult IsAlive()
        {
            return Ok();
        }

        [HttpGet("authorized")]
        public IActionResult IsAliveAuthorized()
        {
            return Ok();
        }
    }
}
