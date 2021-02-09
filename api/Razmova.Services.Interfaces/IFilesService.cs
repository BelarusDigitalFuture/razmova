using System;
using System.Threading.Tasks;
using Razmova.Domain.Documents;
using Razmova.Domain.Files;

namespace Razmova.Services.Interfaces
{
    public interface IFilesService
    {
        Task<DocumentInfo> UploadFileAsync(UserFile file, Guid authorId, string host);

        Task<UserFile> DownloadFileAsync(string path);
    }
}
