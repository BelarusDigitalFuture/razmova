using System;
using System.ComponentModel.DataAnnotations;
using Razmova.Domain.Education;
using Razmova.Domain.Users;

namespace Razmova.Dto.Auth
{
    //todo: change to Id/create model: FacultyName, EducationInstitutionName, EmploymentCompanyName, CityName, CountryName
    public class RegisterRequest
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string FirstName { get; set; }

        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

        public Sex Sex { get; set; }

        public DateTime? BirthDate { get; set; }

        public string About { get; set; }

        public string FacultyName { get; set; }

        public string EducationInstitutionName { get; set; }

        public DateTime? EducationStartedOn { get; set; }

        public DateTime? EducationFinishedOn { get; set; }

        public DiplomaType? DiplomaType { get; set; }

        public EmploymentInfo[] Employments { get; set; }

        public string CityName { get; set; }

        public string CountryName { get; set; }
    }
}
