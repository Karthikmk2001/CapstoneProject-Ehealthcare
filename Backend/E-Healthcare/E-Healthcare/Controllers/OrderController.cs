using E_Healthcare.DAL;
using E_Healthcare.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Healthcare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService orderService;
        public OrderController(IOrderService orderService)
        {
            this.orderService = orderService;
        }

        [HttpPost("AddOrder")]
        public async Task<IActionResult> AddOrderAsync(Order order)
        {
            if (order == null)
            {
                return BadRequest();
            }
            try
            {
                var response = await orderService.AddOrderAsync(order);
                return Ok(response);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
