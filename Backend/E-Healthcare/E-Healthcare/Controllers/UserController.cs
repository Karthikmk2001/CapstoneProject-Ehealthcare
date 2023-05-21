using E_Healthcare.DAL;
using E_Healthcare.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace E_Healthcare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;
        public UserController(IUserService userService)
        {
            this.userService = userService;
        }
        [HttpGet("GetUserList")]
        public async Task<List<User>> GetUsersListAsync()
        {
            try
            {
                return await userService.GetUsersListAsync();
            }
            catch(Exception)
            {
                throw;
            }
        }
        [HttpGet("GetUserById")]
        public async Task<IEnumerable<User>> GetUserByIdAsync(int UserId)
        {
            try
            {
                var response = await userService.GetUserByIdAsync(UserId);
                if(response == null)
                {
                    return null;
                }
                return response;

            }
            catch(Exception)
            {
                throw;
            }
        }
        [HttpPost("AddUser")]
        public async Task<IActionResult> AddUserAsync(User user)
        {
            if(user == null)
            {
                return BadRequest();
            }
            try
            {
                var response = await userService.AddUserAsync(user);
                return Ok(response);
            }
            catch(Exception)
            {
                throw;
            }
        }
    }
}
