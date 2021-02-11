using AutoMapper;
using Razmova.Domain.Documents;

namespace Razmova.Domain.Mapping
{
    public class DomainModelsMappingProfile : Profile
    {
        public DomainModelsMappingProfile()
        {
            CreateMap<File, DocumentInfo>();
        }
    }
}
