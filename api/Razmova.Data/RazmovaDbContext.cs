using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Razmova.Domain.Companies;
using Razmova.Domain.Documents;
using Razmova.Domain.Education;
using Razmova.Domain.LawProjects;
using Razmova.Domain.Locations;
using Razmova.Domain.Tags;
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

        public DbSet<File> Files { get; set; }

        public DbSet<DraftLaw> DraftLaws { get; set; }
        public DbSet<DraftLawCategory> DraftLawCategories { get; set; }
        public DbSet<DraftLawDocument> DraftLawDocuments { get; set; }
        public DbSet<ProjectParticipant> ProjectParticipants { get; set; }
        public DbSet<Tag> Tag { get; set; }
    }
}
