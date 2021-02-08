using System.Threading.Tasks;
using Razmova.Dto.Auth;

namespace Razmova.Services.Interfaces
{
    public interface IAuthService
    {
        Task<AuthenticationResponse> LoginAsync(LoginCredentials credentials);
        Task RegisterAsync(RegisterRequest credentials);
        Task AddToRolesAsync(AddUserRolesRequest request);
    }
}
