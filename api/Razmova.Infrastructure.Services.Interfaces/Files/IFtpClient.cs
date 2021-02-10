using System.Threading.Tasks;

namespace Razmova.Infrastructure.Services.Interfaces.Files
{
    public interface IFtpClient
    {
        Task<byte[]> DownloadAsync(string fullPath);
        Task<string> UploadAsync(byte[] file, string path);
    }
}
