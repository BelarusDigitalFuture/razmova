using System.Collections.Generic;
using System.Linq;

namespace Razmova.WebApi.Helpers
{
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    public static class FileFormatHelper
    {
        private static readonly IDictionary<string, string> MimeTypeMappings = new Dictionary<string, string>
        {
            {"gif", "image/gif"},
            {"jpeg", "image/jpeg"},
            {"jpg", "image/jpeg"},
            {"jpif", "image/jpeg"},
            {"pjpeg", "image/jpeg"},
            {"pjp", "image/jpeg"},
            {"png", "image/png"},
            {"svg+xml", "image/svg"},
            {"pdf", "application/pdf"},
            {"docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"},
            {"txt", "text/plain"}
        };

        public static string GetContentTypeByExtension(string extension) => MimeTypeMappings.TryGetValue(extension, out var format) ? format : null;

        public static string GetExtensionByContentType(string contentType) => MimeTypeMappings.FirstOrDefault(mapping => mapping.Value.Equals(contentType)).Key;

        public static string[] ImageMimeTypes => MimeTypeMappings.Values.Where(value => value.StartsWith("image/")).ToArray();

        public static string[] DocumentMimeTypes => new[] {
            "application/pdf",
            "application/x-pdf",
            "application/x-bzpdf",
            "application/x-gzpdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "text/plain"
        };
    }
}
