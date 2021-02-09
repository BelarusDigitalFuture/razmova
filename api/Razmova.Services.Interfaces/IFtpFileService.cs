using System.Threading.Tasks;
using Razmova.Domain.Files;

namespace Razmova.Services.Interfaces
{
    public interface IFtpFileService
    {
        Task<string> UploadAsync(UserFile file, string path);
        Task<UserFile> DownloadAsync(string path, string filename);
        Task<UserFile> DownloadAsync(string fullPath);
    }
}
