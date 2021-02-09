using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace Razmova.Dto.Files
{
    public class UploadFileModel
    {
        [Required]
        public IFormFile File { get; set; }
    }
}
