using E_Healthcare.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace E_Healthcare.DAL
{
    public class CategoryService : ICategoryService
    {
        private readonly ApplicationDbContext _context;
        public CategoryService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<int> AddCategoryAsync(Category category)
        {
            var parameter = new List<SqlParameter>();
            parameter.Add(new SqlParameter("@CategoryName", category.CategoryName));
            parameter.Add(new SqlParameter("@CategoryDescription", category.CategoryDescription));
            parameter.Add(new SqlParameter("@CategoryAddedDate", category.CategoryAddedDate));
           

            var result = await Task.Run(() => _context.Database.ExecuteSqlRawAsync(@"exec AddCategory @CategoryName,@CategoryDescription,@CategoryAddedDate", parameter.ToArray()));

            return result;
        }

        public async Task<int> DeleteCategoryAsync(int CategoryId)
        {
            var param = new SqlParameter("@CategoryId", CategoryId);



            var result = await Task.Run(() => _context.Database
            .ExecuteSqlRawAsync(@"exec DeleteCategoryById @CategoryId", param)
            );
            return result;
        }

        public async Task<List<Category>> GetCategoriesListAsync()
        {
            return await _context.Categories.FromSqlRaw<Category>("GetCategoryList").ToListAsync();
        }

        public async Task<IEnumerable<Category>> GetCategoryByIdAsync(int CategoryId)
        {
            var param = new SqlParameter("@CategoryId", CategoryId);
            var categoryDetails = await Task.Run(() => _context.Categories.FromSqlRaw(@"exec GetCategoryById @CategoryId", param).ToListAsync());
            return categoryDetails;
        }

        public async Task<int> UpdateCategoryAsync(Category category, int CategoryId)
        {
            var parameter = new List<SqlParameter>();
            parameter.Add(new SqlParameter("@CategoryId", CategoryId));
            parameter.Add(new SqlParameter("@CategoryName", category.CategoryName));
            parameter.Add(new SqlParameter("@CategoryDescription",category.CategoryDescription));
            parameter.Add(new SqlParameter("@CategoryAddedDate", category.CategoryAddedDate));

            var result = await Task.Run(() => _context.Database
            .ExecuteSqlRawAsync(@"exec UpdateCategoryById @CategoryId , @CategoryName,@CategoryDescription, @CategoryAddedDate",
            parameter.ToArray()));
            return result;
        }
    }
}
