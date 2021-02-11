using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Razmova.Infrastructure.Services.Interfaces.Files;

namespace Razmova.Infrastructure.Services.Files
{
    public class DiskStorageClient : IDiskStorageClient
    {
        private readonly ILogger _logger;

        public DiskStorageClient(ILogger<DiskStorageClient> logger)
        {
            _logger = logger;
        }

        public async Task<string> UploadAsync(byte[] file, string path)
        {
            var storage = GetAppDataFolderPath();
            var fullPath = $"../{path}";
            var directory = Path.GetDirectoryName(fullPath);

            _logger.LogInformation($"Starting upload file {path} to {directory}");

            if (!Directory.Exists(directory))
                Directory.CreateDirectory(directory);

            using (var fileStream = new FileStream(fullPath, FileMode.Create))
            {
                await fileStream.WriteAsync(file);
            }

            _logger.LogInformation("Upload File Complete");

            return path;
        }

        public async Task<byte[]> DownloadAsync(string path)
        {
            _logger.LogInformation($"Start to download file from {path}");

            var storage = GetAppDataFolderPath();
            var fullPath = $"../{path}";
            byte[] buffer = null;

            using (var fileStream = new FileStream(fullPath, FileMode.Open))
            {
                buffer = new byte[fileStream.Length];
                await fileStream.ReadAsync(buffer);
            }

            _logger.LogInformation($"Downloaded file from {path}");

            return buffer;
        }

        private static string GetAppDataFolderPath()
        {
            var userPath = Environment.GetEnvironmentVariable(
                RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ?
                    "LOCALAPPDATA" : "Home");

            var assembly = Assembly.GetEntryAssembly();
            var companyName = assembly.GetCustomAttributes<AssemblyCompanyAttribute>()
                .FirstOrDefault();
            var path = System.IO.Path.Combine(userPath, companyName.Company);

            return path;
        }
    }
}
