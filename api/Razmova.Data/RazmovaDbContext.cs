using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Razmova.Domain.Companies;
using Razmova.Domain.Education;
using Razmova.Domain.Locations;
using Razmova.Domain.Users;

namespace Razmova.Data
{
    public class RazmovaDbContext : IdentityDbContext<ApplicationUser>
    {
        public RazmovaDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Company> Companies { get; set; }
        public DbSet<Employment> Employments { get; set; }
        public DbSet<EmploymentScope> EmploymentScopes { get; set; }
        public DbSet<CompanyScope> CompanyScopes { get; set; }

        public DbSet<Education> Educations { get; set; }
        public DbSet<EducationInstitution> EducationInstitutions { get; set; }
        public DbSet<Faculty> Faculties { get; set; }

        public DbSet<Address> Addresses { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Country> Countries { get; set; }

        public DbSet<UserProfile> UserProfiles { get; set; }
    }
}
