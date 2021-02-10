using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Razmova.Dto.Auth;
using Razmova.Services.Interfaces;

namespace Razmova.WebApi.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class AuthController : ApiControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        [ProducesResponseType(typeof(AuthenticationResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [AllowAnonymous]
        public async Task<ActionResult<AuthenticationResponse>> Login([FromBody] LoginCredentials credentials)
        {
            var response = await _authService.LoginAsync(credentials);

            if (response == null)
                return Unauthorized(new { message = "Username or password is incorrect" });

            return response;
        }

        [HttpPost("register")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task Register([FromBody] RegisterRequest userDetails)
        {
            await _authService.RegisterAsync(userDetails);
        }

        [HttpPost("roles")]
        [Authorize(Roles = "admin")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task AddUserRoles([FromBody] AddUserRolesRequest request)
        {
            await _authService.AddToRolesAsync(request);
        }
    }
}
