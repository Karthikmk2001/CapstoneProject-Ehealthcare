using E_Healthcare.DAL;
using E_Healthcare.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Healthcare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            this.categoryService = categoryService;
        }

        [HttpGet("GetCategoryList")]
        public async Task<List<Category>> GetCategoriesListAsync()
        {
            try
            {
                return await categoryService.GetCategoriesListAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpGet("GetCategoryById")]
        public async Task<IEnumerable<Category>> GetCategoryByIdAsync(int CategoryId)
        {
            try
            {
                var response = await categoryService.GetCategoryByIdAsync(CategoryId);
                if (response == null)
                {
                    return null;
                }
                return response;

            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("AddCategory")]
        public async Task<IActionResult> AddCategoryAsync(Category category)
        {
            if (category == null)
            {
                return BadRequest();
            }
            try
            {
                var response = await categoryService.AddCategoryAsync(category);
                return Ok(response);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [EnableCors]
        [HttpPut("UpdateCategoryById")]
        public async Task<int> UpdateCategoryAsync(Category category, int id)
        {
            try
            {
                var response = await categoryService.UpdateCategoryAsync(category, id);
                return response;
            }
            catch (Exception)
            {
                throw;
            }
        }


        [HttpDelete("DeleteCategoryById")]



        public async Task<int> DeleteCategoryByIdAsync(int id)
        {
            try
            {
                var response = await categoryService.DeleteCategoryAsync(id);
                return response;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
