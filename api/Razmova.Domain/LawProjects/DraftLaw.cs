using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Razmova.Domain.DataAnnotations;
using Razmova.Domain.Documents;
using Razmova.Domain.Tags;

namespace Razmova.Domain.LawProjects
{
    public class DraftLaw : DataModel
    {
        public DraftLawStatus Status { get; set; }

        public bool IsNew { get; set; }

        [RequiredIf(nameof(IsNew), false, "A parental draft law is required for laws based on existing ones.")]
        public DraftLaw ParentDraftLaw { get; set; }

        public DraftLawType Type { get; set; }

        public DraftLawDocument Document { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        public DraftLawCategory Category { get; set; }

        public IList<Tag> Tags { get; set; }

        public IList<ProjectParticipant> Participants { get; set; }
    }
}
