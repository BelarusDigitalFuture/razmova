using System.Threading.Tasks;
using Razmova.Domain.Files;

namespace Razmova.Services.Interfaces
{
    public interface IDiskFileService
    {
        Task<string> UploadAsync(UserFile file, string path);
        Task<UserFile> DownloadAsync(string fullPath);
    }
}
