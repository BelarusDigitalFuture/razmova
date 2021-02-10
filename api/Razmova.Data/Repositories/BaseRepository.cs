using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Razmova.Domain;

namespace Razmova.Data.Repositories
{
    public abstract class BaseRepository<T> where T : IDataModel
    {
        protected readonly RazmovaDbContext Context;

        protected abstract IQueryable<T> Entities { get; }

        protected BaseRepository(RazmovaDbContext context)
        {
            Context = context;
        }

        public virtual async Task<T> GetByIdAsync(Guid id)
        {
            return await Entities.SingleOrDefaultAsync(entity => entity.Id == id);
        }

        public virtual async Task<T> AddAsync(T entity)
        {
            await Context.AddAsync(entity);
            await Context.SaveChangesAsync();

            return entity;
        }

        public virtual async Task<T> UpdateAsync(T entity)
        {
            Context.Update(entity);

            await Context.SaveChangesAsync();

            return entity;
        }

        public virtual async Task DeleteAsync(T entity)
        {
            Context.Remove(entity);

            await Context.SaveChangesAsync();
        }
    }
}
