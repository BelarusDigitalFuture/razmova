using System;
using Razmova.Domain.Users;

namespace Razmova.Domain.Documents
{
    public class File : DataModel
    {
        public UserProfile Author { get; set; }
        public Guid AuthorId { get; set; }
        public string Number { get; set; }
        public string DonwloadLink { get; set; }
        public bool IsFilePathAbsolute { get; set; }
        public string Name { get; set; }
        public string FriendlyName { get; set; }
    }
}
