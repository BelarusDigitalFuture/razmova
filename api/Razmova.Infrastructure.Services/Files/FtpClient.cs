using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Razmova.Infrastructure.Services.Interfaces.Files;

namespace Razmova.Infrastructure.Services.Files
{
    public class FtpClient : IFtpClient
    {
        private readonly ILogger _logger;
        private readonly FtpOptions _options;

        public FtpClient(IOptions<FtpOptions> options, ILogger<FtpClient> logger)
        {
            _logger = logger;
            _options = options.Value;
        }

        public async Task<byte[]> DownloadAsync(string fullPath)
        {
            _logger.LogInformation($"Start to download file from {fullPath}");

            var client = new WebClient
            {
                Credentials = BuildCredentials()
            };

            var timer = DateTime.Now;

            var content = await client.DownloadDataTaskAsync($"{_options.BaseAddress}/{fullPath}").ConfigureAwait(false);

            _logger.LogInformation($"Download file from {fullPath}. {(DateTime.Now - timer).TotalMilliseconds}ms elapsed");

            return content;
        }

        public async Task<string> UploadAsync(byte[] file, string path)
        {
            var request = BuildUploadRequest(file, path);

            return await SendRequestAsync(request, file);
        }

        private async Task<string> SendRequestAsync(FtpWebRequest request, byte[] fileContent)
        {
            try
            {
                using (var requestStream = request.GetRequestStream())
                {
                    await requestStream.WriteAsync(fileContent, 0, fileContent.Length).ConfigureAwait(false);
                }

                using (var response = (FtpWebResponse) request.GetResponse())
                {
                    _logger.LogInformation($@"Upload File Complete, status {response.StatusDescription}");

                    return response.ResponseUri.LocalPath;
                }
            }
            catch (Exception ex)
            {
                throw;
            }
           
        }

        private NetworkCredential BuildCredentials() => new NetworkCredential(_options.UserName, _options.Password);

        private FtpWebRequest BuildUploadRequest(byte[] fileContent, string filePath)
        {
            var requestUriString = $"{_options.BaseAddress}/{filePath}";
            _logger.LogInformation($"Starting build request to upload file to {requestUriString}");

            var request = (FtpWebRequest)WebRequest.Create(requestUriString);

            request.Method = WebRequestMethods.Ftp.UploadFile;
            request.Credentials = BuildCredentials();
            request.ContentLength = fileContent.Length;
            request.KeepAlive = true;
            request.UseBinary = true;
            request.UsePassive = true;

            return request;
        }
    }
}
