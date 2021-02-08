using System;

namespace Razmova.Domain.Education
{
    public class Education : DataModel
    {
        public Faculty Faculty { get; set; }

        public DateTime? StartedOn { get; set; }

        public DateTime? FinishedOn { get; set; }

        public DiplomaType? DiplomaType { get; set; }
    }
}
