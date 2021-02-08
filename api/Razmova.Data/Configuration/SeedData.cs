using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Razmova.Domain.Users;

namespace Razmova.Data.Configuration
{
    public class SeedData
    {
        public static async Task SeedAsync(RazmovaDbContext context)
        {
            await SeedRolesAsync(context);
            await SeedUsersAsync(context);

            await context.SaveChangesAsync();
        }

        private static async Task SeedRolesAsync(RazmovaDbContext context)
        {
            var defaultRoles = new List<IdentityRole>
            {
                new IdentityRole { Name = "admin", NormalizedName = "ADMIN" },
                new IdentityRole { Name = "moderator", NormalizedName = "MODERATOR" },
                new IdentityRole { Name = "specialist", NormalizedName = "SPECIALIST" }
            };

            var roleStore = new RoleStore<IdentityRole>(context);

            foreach (var role in defaultRoles)
            {
                if (context.Roles.All(storedRole => storedRole.Name != role.Name))
                {
                    await roleStore.CreateAsync(role);
                }
            }
        }

        private static async Task SeedUsersAsync(RazmovaDbContext context)
        {
            var id = Guid.NewGuid();

            var defaultUser = new ApplicationUser
            {
                Id = id.ToString(),
                Email = "bubblekovrik@gmail.com",
                NormalizedEmail = "BUBBLEKOVRIK@GMAIL.COM",
                UserName = "admin",
                NormalizedUserName = "ADMIN",
                PhoneNumber = "+375290000000",
                EmailConfirmed = true,
                PhoneNumberConfirmed = false,
                SecurityStamp = Guid.NewGuid().ToString("D"),
                UserProfile = new UserProfile
                {
                    Id = id,
                    FirstName = "Admin",
                    LastName = "Super"
                }
            };

            var userExists = await context.Users.AnyAsync(storedUser => storedUser.UserName == defaultUser.UserName);

            if (userExists)
            {
                return;
            }

            var passwordHash = new PasswordHasher<ApplicationUser>();
            var password = passwordHash.HashPassword(defaultUser, "Password@123");

            defaultUser.PasswordHash = password;

            var userStore = new UserStore<ApplicationUser>(context);

            await userStore.CreateAsync(defaultUser);
            await userStore.AddToRoleAsync(defaultUser, "admin");
            await userStore.AddToRoleAsync(defaultUser, "moderator");
            await userStore.AddToRoleAsync(defaultUser, "specialist");
        }
    }
}
