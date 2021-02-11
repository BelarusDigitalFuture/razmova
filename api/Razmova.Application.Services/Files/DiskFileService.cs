using System;
using System.Linq;
using System.Threading.Tasks;
using Razmova.Domain.Files;
using Razmova.Infrastructure.Services.Interfaces.Files;
using Razmova.Services.Interfaces;

namespace Razmova.Application.Services.Files
{
    public class DiskFileService : IDiskFileService
    {
        private readonly IDiskStorageClient _storageClient;

        public DiskFileService(IDiskStorageClient storageClient)
        {
            _storageClient = storageClient;
        }

        public async Task<string> UploadAsync(UserFile file, string path)
        {
            var filePath = GenerateFilePath(path, file.Extension);

            return await _storageClient.UploadAsync(file.Content, filePath);
        }

        public async Task<UserFile> DownloadAsync(string fullPath)
        {
            var content = await _storageClient.DownloadAsync(fullPath).ConfigureAwait(false);

            return new UserFile
            {
                Content = content,
                Extension = fullPath.Split(".").Last(),
                Name = fullPath.Split("/").Last()
            };
        }

        private static string GenerateFilePath(string path, string extension) => $"{path}/{DateTime.UtcNow.Ticks}.{extension.Split("/").Last()}";
    }
}
