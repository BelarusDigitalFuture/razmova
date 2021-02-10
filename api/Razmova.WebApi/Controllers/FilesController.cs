using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Razmova.Domain.Documents;
using Razmova.Domain.Files;
using Razmova.Dto.Files;
using Razmova.Services.Interfaces;
using Razmova.WebApi.Extensions;
using Razmova.WebApi.Helpers;

namespace Razmova.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class FilesController : ApiControllerBase
    {
        private readonly IFilesService _fileService;
        private readonly IHttpContextAccessor _contextAccessor;

        private Guid UserId => User.Identity.UserId();

        public FilesController(IFilesService fileService, IHttpContextAccessor contextAccessor)
        {
            _fileService = fileService;
            _contextAccessor = contextAccessor;
        }

        [HttpPost]
        public async Task<DocumentInfo> UploadFileAsync([FromForm] UploadFileModel model)
        {
            var fileContent = await ReadFormFileAsync(model.File, FileFormatHelper.DocumentMimeTypes).ConfigureAwait(false);

            return await _fileService.UploadFileAsync(fileContent, UserId, $"{_contextAccessor.HttpContext.Request.Scheme}://{_contextAccessor.HttpContext.Request.Host}").ConfigureAwait(false);
        }

        [HttpGet("download/{*path}")]
        [AllowAnonymous]
        public async Task<FileContentResult> DownloadDocumentAsync(string path)
        {
            var file = await _fileService.DownloadFileAsync($"{path}").ConfigureAwait(false);

            return ToFileContentResult(file);
        }

        private async Task<UserFile> ReadFormFileAsync(IFormFile formFile, string[] allowedFileFormats)
        {
            if (!HttpContext.Request.HasFormContentType)
            {
                throw new ValidationException("Content type is invalid");
            }

            FormFilesReader.ValidateContentType(formFile, allowedFileFormats);
            var fileContent = await FormFilesReader.ReadFileAsync(formFile).ConfigureAwait(false);

            return fileContent;
        }

        private string BuildUploadLink(string fullPath, string section)
        {
            var pathLength = fullPath.LastIndexOf("/", StringComparison.Ordinal);
            var fileName = fullPath.Substring(pathLength).Replace("/", string.Empty);

            return $"{_contextAccessor.HttpContext.Request.Scheme}://{_contextAccessor.HttpContext.Request.Host}/files/{section}/{fileName}";
        }

        private FileContentResult ToFileContentResult(UserFile userFile) => File(userFile.Content, FileFormatHelper.GetContentTypeByExtension(userFile.Extension), userFile.FriendlyName ?? userFile.Name);
    }
}
