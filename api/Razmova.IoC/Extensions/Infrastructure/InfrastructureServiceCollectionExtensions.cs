using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Razmova.Infrastructure.Services.Files;
using Razmova.Infrastructure.Services.Interfaces.Files;

namespace Razmova.IoC.Extensions.Infrastructure
{
    public static class InfrastructureServiceCollectionExtensions
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDatabaseServices(configuration);
            services.AddMapping();

            services.AddTransient<IDiskStorageClient, DiskStorageClient>();

            return services;
        }
    }
}
