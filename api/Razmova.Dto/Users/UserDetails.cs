using System;
using System.Collections.Generic;
using Razmova.Domain.Companies;
using Razmova.Domain.Locations;
using Razmova.Domain.Users;

namespace Razmova.Dto.Users
{
    public class UserDetails
    {
        public string Id { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string AvatarLink { get; set; }
        public Sex Sex { get; set; }
        public DateTime? BirthDate { get; set; }
        public string About { get; set; }
        public Address Address { get; set; }
        public Domain.Education.Education Education { get; set; }
        public IList<Employment> Employments { get; set; }
    }
}
