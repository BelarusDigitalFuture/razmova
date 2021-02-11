using System;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Razmova.Dto.Users;
using Razmova.Services.Interfaces;
using Razmova.WebApi.Extensions;

namespace Razmova.WebApi.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class UsersController : ApiControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<ActionResult<UserDetails>> Get()
        {
            var user = await _userService.GetDetailsAsync(User.Identity.UserId());

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<ActionResult<UserDetails>> Get(Guid id)
        {
            var user = await _userService.GetDetailsAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }
    }
}
