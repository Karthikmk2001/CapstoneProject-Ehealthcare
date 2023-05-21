using E_Healthcare.Models;

namespace E_Healthcare.DAL
{
    public interface IUserService
    {
        public Task<List<User>> GetUsersListAsync();



        public Task<IEnumerable<User>> GetUserByIdAsync(int id);



        public Task<int> AddUserAsync(User user);



        public Task<int> UpdateUserAsync(User user, int id);



        public Task<int> DeleteUserAsync(int id);
    }
}
