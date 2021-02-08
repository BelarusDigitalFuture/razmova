using System;
using System.ComponentModel.DataAnnotations;

namespace Razmova.Dto.Auth
{
    //todo: change to Id/create model: EmploymentCompanyName, CompanyScope
    public class EmploymentInfo
    {
        [Required]
        public string EmploymentCompanyName { get; set; }

        public string EmploymentPosition { get; set; }

        [Range(0, 80)]
        public float? WorkExperienceYears { get; set; }

        public DateTime? EmploymentDate { get; set; }

        public DateTime? DismissalDate { get; set; }

        public string Scope { get; set; }
    }
}
