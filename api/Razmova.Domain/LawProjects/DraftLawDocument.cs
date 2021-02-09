using Razmova.Domain.DataAnnotations;
using Razmova.Domain.Documents;

namespace Razmova.Domain.LawProjects
{
    public class DraftLawDocument : DataModel
    {
        [RequiredIf(nameof(DirectLink), null, "The document must be assigned to an internal file or be linked to an external one.")]
        public File File { get; set; }

        [RequiredIf(nameof(File), null, "The document must be assigned to an internal file or be linked to an external one.")]
        public string DirectLink { get; set; }
    }
}
