using System;
using Microsoft.AspNetCore.Identity;

namespace Razmova.Domain.Users
{
    public class ApplicationUser : IdentityUser
    {
        public UserProfile UserProfile { get; set; }
        public Guid UserProfileId { get; set; }
    }
}
