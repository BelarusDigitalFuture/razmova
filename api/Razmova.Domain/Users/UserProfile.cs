using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Razmova.Domain.Companies;
using Razmova.Domain.Locations;

namespace Razmova.Domain.Users
{
    public class UserProfile : DataModel
    {
        [Required]
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public Sex Sex { get; set; }

        public DateTime? BirthDate { get; set; }

        public string About { get; set; }

        public Education.Education Education { get; set; }

        public IList<Employment> Employments { get; set; }

        public Address Address { get; set; }

        public ApplicationUser ApplicationUser { get; set; }
    }
}
