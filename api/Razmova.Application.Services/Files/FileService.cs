using System;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Razmova.Domain.Documents;
using Razmova.Domain.Files;
using Razmova.Domain.Interfaces.Data.Repositories;
using Razmova.Services.Interfaces;

namespace Razmova.Application.Services.Files
{
    public class FileService : IFilesService
    {
        private const string DefaultDocumentStoragePath = "docs";

        private readonly IFileRepository _fileRepository;
        private readonly IFtpFileService _ftpFileService;
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public FileService(IFtpFileService ftpFileService, IUserService userService, IFileRepository fileRepository, IMapper mapper)
        {
            _ftpFileService = ftpFileService;
            _userService = userService;
            _fileRepository = fileRepository;
            _mapper = mapper;
        }

        public async Task<DocumentInfo> UploadFileAsync(UserFile file, Guid authorId, string host)
        {
            var author = await _userService.GetUserAsync(authorId).ConfigureAwait(false);
            var filePath = await _ftpFileService.UploadAsync(file, GetStoragePath());

            var document = new File
            {
                AuthorId = authorId,
                DonwloadLink = $"{host}/api/files/download{filePath}",
                IsFilePathAbsolute = false,
                Name = filePath.Split("/").Last(),
                FriendlyName = file.FriendlyName
            };

            var savedDocument = await _fileRepository.AddAsync(document);

            return _mapper.Map<DocumentInfo>(savedDocument);
        }

        public async Task<UserFile> DownloadFileAsync(string path)
        {
            return await _ftpFileService.DownloadAsync(path).ConfigureAwait(false);
        }

        private static string GetStoragePath() => DefaultDocumentStoragePath;
    }
}
