using System.Collections.Generic;
using System.Threading.Tasks;
using Razmova.Domain.Tags;

namespace Razmova.Domain.Interfaces.Data.Repositories
{
    public interface ITagRepository
    {
        Task<IList<Tag>> GetAsync(IList<string> tags);
    }
}
