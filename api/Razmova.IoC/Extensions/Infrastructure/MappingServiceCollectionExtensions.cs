using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using Razmova.Domain.Mapping;
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
                config.AddProfile<DomainModelsMappingProfile>();
            });

            var mapper = mapperConfiguration.CreateMapper();

            services.AddTransient(serviceProvider => mapper);

            return services;
        }
    }
}
