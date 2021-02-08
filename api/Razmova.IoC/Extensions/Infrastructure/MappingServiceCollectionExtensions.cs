using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using Razmova.Dto.Mapping;

namespace Razmova.IoC.Extensions.Infrastructure
{
    public static class MappingServiceCollectionExtensions
    {
        public static IServiceCollection AddMapping(this IServiceCollection services)
        {
            var mapperConfiguration = new MapperConfiguration(config =>
            {
                config.AddProfile<DomainDtoMappingProfile>();
            });

            var mapper = mapperConfiguration.CreateMapper();

            services.AddTransient(serviceProvider => mapper);

            return services;
        }
    }
}
