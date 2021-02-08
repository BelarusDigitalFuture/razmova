using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Razmova.IoC.Extensions;
using Razmova.IoC.Extensions.Application;
using Razmova.IoC.Extensions.Infrastructure;

namespace Razmova.IoC
{
    public static class IoCContainer
    {
        public static void RegisterServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddInfrastructureServices(configuration);
            services.AddApplicationServices(configuration);
            services.ConfigureAuth(configuration);
        }
    }
}
