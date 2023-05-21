using E_Healthcare.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace E_Healthcare.DAL
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;
        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<User>> GetUsersListAsync()
        {
            return await _context.Users.FromSqlRaw<User>("GetUserList").ToListAsync();
        }

        public async Task<IEnumerable<User>> GetUserByIdAsync(int UserId)
        {
            var param = new SqlParameter("@UserId", UserId);
            var userDetails = await Task.Run(() => _context.Users.FromSqlRaw(@"exec GetUserById @UserId", param).ToListAsync());
            return userDetails;
        }
        public async Task<int> AddUserAsync(User user)
        {
            var parameter=new List<SqlParameter>();
            parameter.Add(new SqlParameter("@Fullname", user.Fullname));
            parameter.Add(new SqlParameter("@Username", user.Username));
            parameter.Add(new SqlParameter("@Email", user.Email));
            parameter.Add(new SqlParameter("@Role", user.Role));
            parameter.Add(new SqlParameter("@Password", user.Password));

            var result = await Task.Run(() => _context.Database.ExecuteSqlRawAsync(@"exec AddUser @Fullname,@Username,@Email,@Role,@Password", parameter.ToArray()));
            return result;
        }

        public Task<int> DeleteUserAsync(int id)
        {
            throw new NotImplementedException();
        }

       

       

        public Task<int> UpdateUserAsync(User user, int id)
        {
            throw new NotImplementedException();
        }
    }
}
