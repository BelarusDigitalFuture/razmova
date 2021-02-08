using System.Collections.Generic;
using Razmova.Domain.Users;

namespace Razmova.Domain.Education
{
    public class Faculty : DataModel
    {
        public EducationInstitution Institution { get; set; }

        public string Name { get; set; }

        public virtual IList<UserProfile> Students { get; set; }
    }
}
