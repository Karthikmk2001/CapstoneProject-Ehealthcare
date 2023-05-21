namespace E_Healthcare.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Fullname { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public string Password {  get; set; }
        public List<Order>? Orders { get; set; }
    }
}
