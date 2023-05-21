using E_Healthcare.Models;

namespace E_Healthcare.DAL
{
    public interface ICategoryService
    {
        public Task<List<Category>> GetCategoriesListAsync();



        public Task<IEnumerable<Category>> GetCategoryByIdAsync(int id);



        public Task<int> AddCategoryAsync(Category category);



        public Task<int> UpdateCategoryAsync(Category category, int id);



        public Task<int> DeleteCategoryAsync(int id);
    }
}
