using System;
using System.ComponentModel.DataAnnotations;

namespace Razmova.Dto.DraftLaws
{
    public class RelatedDraftLaw
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        public Guid? Id { get; set; }
    }
}
