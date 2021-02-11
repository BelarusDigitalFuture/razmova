using System.Threading.Tasks;

namespace Razmova.Infrastructure.Services.Interfaces.Files
{
    public interface IDiskStorageClient
    {
        Task<string> UploadAsync(byte[] file, string path);

        Task<byte[]> DownloadAsync(string path);
    }
}
