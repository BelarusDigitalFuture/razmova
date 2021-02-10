using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Razmova.Data;
using Razmova.Data.Repositories;
using Razmova.Domain.Interfaces.Data.Repositories;

namespace Razmova.IoC.Extensions.Infrastructure
{
    public static class DatabaseServiceCollectionExtensions
    {
        public static IServiceCollection AddDatabaseServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<RazmovaDbContext>(options => options.UseSqlServer(
                configuration.GetConnectionString("DefaultConnection")));

            services.AddTransient<IUserProfileRepository, UserProfileRepository>();
            services.AddTransient<IFileRepository, FileRepository>();
            services.AddTransient<IDraftLawCategoryRepository, DraftLawCategoryRepository>();
            services.AddTransient<IDraftLawDocumentRepository, DraftLawDocumentRepository>();
            services.AddTransient<IDraftLawRepository, DraftLawRepository>();
            services.AddTransient<ITagRepository, TagRepository>();
            services.AddTransient<IUserProfileRepository, UserProfileRepository>();

            return services;
        }
    }
}
