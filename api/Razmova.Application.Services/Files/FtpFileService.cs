using System;
using System.Linq;
using System.Threading.Tasks;
using Razmova.Domain.Files;
using Razmova.Infrastructure.Services.Interfaces.Files;
using Razmova.Services.Interfaces;

namespace Razmova.Application.Services.Files
{
    public class FtpFileService : IFtpFileService
    {
        private readonly IFtpClient _ftpClient;

        public FtpFileService(IFtpClient ftpClient)
        {
            _ftpClient = ftpClient;
        }

        public async Task<UserFile> DownloadAsync(string path, string filename)
        {
            return await DownloadAsync($"{path}/{filename}").ConfigureAwait(false);
        }

        public async Task<UserFile> DownloadAsync(string fullPath)
        {
            var content = await _ftpClient.DownloadAsync(fullPath).ConfigureAwait(false);

            return new UserFile
            {
                Content = content,
                Extension = fullPath.Split(".").Last(),
                Name = fullPath.Split("/").Last()
            };
        }

        public async Task<string> UploadAsync(UserFile file, string path)
        {
            var filePath = GenerateFilePath(path, file.Extension);

            return await _ftpClient.UploadAsync(file.Content, filePath);
        }

        private static string GenerateFilePath(string path, string extension) => $"{path}/{DateTime.UtcNow.Ticks}.{extension.Split("/").Last()}";
    }
}
