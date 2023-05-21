using System.ComponentModel.DataAnnotations;

namespace E_Healthcare.Models
{
    public class Medicine
    {
        public int MedicineId { get; set; }
        public string MedicineName { get; set; }
        public double Price { get; set; }
        public int AvailableQuantity { get; set; }
        public string Image { get; set; }
        public int CategoryId { get; set; }

        [DataType(DataType.Date)]
        public DateTime MedicineAddedDate { get; set; }
        public Category? Category { get; set; }
    }
}
