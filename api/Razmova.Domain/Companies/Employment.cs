using System;

namespace Razmova.Domain.Companies
{
    public class Employment : DataModel
    {
        public Company Company { get; set; }

        public string Position { get; set; }

        public float? WorkExperience { get; set; }

        public DateTime? EmploymentDate { get; set; }

        public DateTime? DismissalDate { get; set; }

        public EmploymentScope Scope { get; set; }
    }
}
