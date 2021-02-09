namespace Razmova.Domain.Files
{
    public class UserFile
    {
        public byte[] Content { get; set; }
        public string ContentType { get; set; }
        public string Extension { get; set; }
        public string FriendlyName { get; set; }
        public string Name { get; set; }
    }
}
