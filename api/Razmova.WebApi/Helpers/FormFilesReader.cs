using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Razmova.Domain.Files;

namespace Razmova.WebApi.Helpers
{
    public static class FormFilesReader
    {
        public static void ValidateContentType(IFormFile file, string[] allowedFormats)
        {
            if (!allowedFormats.Contains(file.ContentType))
            {
                throw new ValidationException($"Request contains files with invalid format. Allowed formats: {string.Join(", ", allowedFormats)}");
            }
        }

        public static async Task<UserFile> ReadFileAsync(IFormFile file)
        {
            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);

                return new UserFile
                {
                    Content = memoryStream.ToArray(),
                    ContentType = file.ContentType,
                    Extension = FileFormatHelper.GetExtensionByContentType(file.ContentType),
                    FriendlyName = file.FileName
                };
            }
        }
    }
}
