using System;
using System.Threading.Tasks;
using Razmova.Domain.Documents;

namespace Razmova.Domain.Interfaces.Data.Repositories
{
    public interface IFileRepository
    {
        Task<File> GetByIdAsync(Guid id);
        Task<File> AddAsync(File id);
        Task DeleteAsync(File id);
    }
}
