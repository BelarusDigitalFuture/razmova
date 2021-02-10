using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Razmova.Dto.Auth;
using Razmova.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Razmova.Domain.Education;
using Razmova.Domain.Users;

namespace Razmova.Application.Services.Auth
{
    public class AuthService : IAuthService
    {
        private const string UserIdClaimKey = "user_id";

        private readonly AuthOptions _options;
        private readonly IUserService _userService;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ISystemNotificationService _notificationService;
        private readonly IMapper _mapper;
        private readonly ILogger _logger;

        public AuthService(
            IOptions<AuthOptions> options,
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IUserService userService,
            ISystemNotificationService notificationService,
            IMapper mapper,
            ILogger<AuthService> logger)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper; 
            _logger = logger;
            _notificationService = notificationService;
            _userService = userService;
            _options = options.Value;
        }

        public async Task<AuthenticationResponse> LoginAsync(LoginCredentials credentials)
        {
            var user = await GetAsync(credentials.Username, credentials.Password);

            if (user == null)
            {
                throw new UnauthorizedAccessException();
            }

            var accessToken = await GenerateAccessTokenAsync(user);

            return new AuthenticationResponse
            {
                AccessToken = accessToken
            };
        }

        public async Task RegisterAsync(RegisterRequest credentials)
        {
            var applicationUser = new ApplicationUser
            {
                Email = credentials.Email,
                UserName = credentials.Username,
                UserProfile = BuildUserProfile(credentials)
            };

            //todo update instead of create if empty user found
            var existingUser = await _userManager.FindByEmailAsync(credentials.Email);

            await ValidateCreateUserDataAsync(applicationUser);
            await SaveAsync(applicationUser, credentials.Password);
        }

        //todo add education, employment, address
        private static UserProfile BuildUserProfile(RegisterRequest user)
        {
            return new UserProfile
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Sex = user.Sex,
                BirthDate = user.BirthDate,
                About = user.About
            };
        }

        public async Task AddToRolesAsync(AddUserRolesRequest request)
        {
            var applicationUser = await _userManager.FindByNameAsync(request.Username);

            await AssignRolesAsync(applicationUser, request.Roles);
        }

        private async Task ValidateCreateUserDataAsync(ApplicationUser creatingUser)
        {
            var sameEmail = await _userManager.FindByEmailAsync(creatingUser.Email);

            if (sameEmail != null)
            {
                _logger.LogInformation($"Register of user with email={creatingUser.Email} failed. Email is already in use");
                
                throw new ValidationException();
            }
        }

        private async Task SaveAsync(ApplicationUser user, string password)
        {
            var createResult = await _userManager.CreateAsync(user, password);
            Validate(createResult);
        }

        private async Task AssignRolesAsync(ApplicationUser user, IEnumerable<string> roles)
        {
            var rolesAssignResult = await _userManager.AddToRolesAsync(user, roles);
            Validate(rolesAssignResult);
        }

        private static void Validate(IdentityResult result)
        {
            if (!result.Succeeded)
            {
                var exceptionMessage =
                    string.Join("\n", result.Errors.Select(error => $"{error.Code}: {error.Description}"));

                throw new ValidationException(exceptionMessage);
            }
        }

        private async Task<ApplicationUser> GetAsync(string username, string password)
        {
            var user = await _userManager.FindByNameAsync(username);

            if (user == null)
            {
                return null;
            }

            var result = _userManager.PasswordHasher.VerifyHashedPassword(user, user.PasswordHash, password);

            return result == PasswordVerificationResult.Failed
                ? null
                : user;
        }

        private async Task<string> GenerateAccessTokenAsync(ApplicationUser user)
        {
            var tokenHandler = new JwtSecurityTokenHandler(); var key = Encoding.ASCII.GetBytes(_options.Secret);
            var claims = await GetValidClaimsAsync(user);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMilliseconds(_options.TokenExpireMilliseconds),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Audience = _options.Audience,
                Issuer = _options.Issuer
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        private async Task<List<Claim>> GetValidClaimsAsync(ApplicationUser user)
        {
            var options = new IdentityOptions();

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(options.ClaimsIdentity.UserIdClaimType, user.Id),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(UserIdClaimKey, user.Id)
            };

            var userClaims = await _userManager.GetClaimsAsync(user);
            var userRoles = await _userManager.GetRolesAsync(user);

            claims.AddRange(userClaims);

            foreach (var userRole in userRoles)
            {
                claims.Add(new Claim(ClaimTypes.Role, userRole));
                var role = await _roleManager.FindByNameAsync(userRole);
                if (role != null)
                {
                    var roleClaims = await _roleManager.GetClaimsAsync(role);
                    foreach (var roleClaim in roleClaims)
                    {
                        claims.Add(roleClaim);
                    }
                }
            }
            return claims;
        }
    }
}
