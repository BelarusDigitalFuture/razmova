using System;

namespace Razmova.Domain.Documents
{
    public class DocumentInfo
    {
        public Guid Id { get; set; }
        public Guid AuthorId { get; set; }
        public string Number { get; set; }
        public string FriendlyName { get; set; }
        public string DownloadLink { get; set; }
    }
}
