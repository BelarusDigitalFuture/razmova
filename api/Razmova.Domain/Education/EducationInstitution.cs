using System.Collections.Generic;

namespace Razmova.Domain.Education
{
    public class EducationInstitution : DataModel
    {
        public virtual IList<Faculty> Faculties { get; set; }
    }
}
