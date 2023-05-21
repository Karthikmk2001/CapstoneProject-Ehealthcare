using E_Healthcare.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace E_Healthcare.DAL
{
    public class OrderService : IOrderService
    {
        private readonly ApplicationDbContext _context;
        public OrderService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<int> AddOrderAsync(Order order)
        {
            var parameter = new List<SqlParameter>();
            parameter.Add(new SqlParameter("@UserId", order.UserId));
            parameter.Add(new SqlParameter("@MedicineId", order.MedicineId));
            parameter.Add(new SqlParameter("@OrderDate", order.OrderDate));
           

            var result = await Task.Run(() => _context.Database.ExecuteSqlRawAsync(@"exec AddOrder @UserId,@MedicineId,@OrderDate", parameter.ToArray()));
            return result;
        }

        public Task<int> DeleteOrderAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Order>> GetOrderByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Order>> GetOrdersListAsync()
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateOrderAsync(Order order, int id)
        {
            throw new NotImplementedException();
        }
    }
}
