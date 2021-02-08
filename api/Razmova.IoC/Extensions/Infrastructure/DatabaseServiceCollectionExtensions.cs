using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Razmova.Data;

namespace Razmova.IoC.Extensions.Infrastructure
{
    public static class DatabaseServiceCollectionExtensions
    {
        public static IServiceCollection AddDatabaseServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<RazmovaDbContext>(options => options.UseSqlServer(
                configuration.GetConnectionString("DefaultConnection")));

            //services.AddTransient<IRepository, Repository>();

            return services;
        }
    }
}
