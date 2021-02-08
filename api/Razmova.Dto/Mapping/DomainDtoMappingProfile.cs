using AutoMapper;
using Razmova.Domain.Education;
using Razmova.Domain.Locations;
using Razmova.Domain.Users;
using Razmova.Dto.Auth;

namespace Razmova.Dto.Mapping
{
    public class DomainDtoMappingProfile : Profile
    {
        public DomainDtoMappingProfile()
        {
            CreateMap<RegisterRequest, ApplicationUser>()
                .ForMember(x => x.UserProfileId, opt => opt.Ignore())
                .ForMember(x => x.PasswordHash, opt => opt.Ignore())
                .ForMember(x => x.EmailConfirmed, opt => opt.Ignore())
                .ForMember(x => x.SecurityStamp, opt => opt.Ignore())
                .ForMember(x => x.TwoFactorEnabled, opt => opt.Ignore())
                .ForMember(x => x.LockoutEnd, opt => opt.Ignore())
                .ForMember(x => x.LockoutEnabled, opt => opt.Ignore())
                .ForMember(x => x.AccessFailedCount, opt => opt.Ignore());

            CreateMap<RegisterRequest, UserProfile>()
                .ForMember(x => x.ApplicationUser, opt => opt.Ignore())
                .ForMember(x => x.Education, opt => opt.MapFrom(src => src))
                //.ForMember(x => x.Employments, opt => opt.MapFrom(src => src.Employments))
                .ForMember(x => x.Address, opt => opt.MapFrom(src => src));

            CreateMap<RegisterRequest, Education>()
                .ForMember(x => x.Faculty, opt => opt.MapFrom(src => new Faculty {Name = src.FacultyName}))
                .ForMember(x => x.StartedOn, opt => opt.MapFrom(src => src.EducationStartedOn))
                .ForMember(x => x.FinishedOn, opt => opt.MapFrom(src => src.EducationFinishedOn));

            CreateMap<RegisterRequest, Address>()
                .ForMember(x => x.City, opt => opt.MapFrom(src => new City { Name = src.CityName, Country = new Country { Name = src.CountryName } }))
                .ForMember(x => x.Street, opt => opt.Ignore())
                .ForMember(x => x.BuildingNumber, opt => opt.Ignore())
                .ForMember(x => x.ApartmentNumber, opt => opt.Ignore())
                .ForMember(x => x.Additional, opt => opt.Ignore());
        }
    }
}
