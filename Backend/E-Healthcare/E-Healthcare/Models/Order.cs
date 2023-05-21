

using System.ComponentModel.DataAnnotations;

namespace E_Healthcare.Models
{
    public class Order
    {
        public int OrderId { get; set; }

        public int UserId { get; set; }

        public int MedicineId {get; set; }
        public List<Medicine> Medicines { get; set; }
        public User User { get; set; }

        [DataType(DataType.Date)]
        public DateTime OrderDate { get; set; }
    }
}
