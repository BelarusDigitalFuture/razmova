using System;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;

namespace Razmova.WebApi.Extensions
{
    public static class IdentityExtensions
    {
        private const string UserIdClaimKey = "user_id";

        public static string GetClaimValue(this IIdentity identity, string key) =>
            (identity as ClaimsIdentity)?.Claims.SingleOrDefault(c => c.Type == key)?.Value;

        public static Guid UserId(this IIdentity identity)
        {
            var id = GetClaimValue(identity, UserIdClaimKey);

            return !string.IsNullOrWhiteSpace(id) && Guid.TryParse(id, out var parsedId)
                ? parsedId
                : Guid.Empty;
        }
    }
}
