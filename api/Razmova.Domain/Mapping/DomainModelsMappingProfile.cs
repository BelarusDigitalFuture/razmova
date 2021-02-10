using System;
using AutoMapper;
using Razmova.Domain.Documents;

namespace Razmova.Domain.Mapping
{
    public class DomainModelsMappingProfile : Profile
    {
        public DomainModelsMappingProfile()
        {
            CreateMap<File, DocumentInfo>()
                .ForMember(x => x.AuthorId, opt => opt.MapFrom(src => src.Author == null ? Guid.Empty : src.Author.Id));
        }
    }
}
