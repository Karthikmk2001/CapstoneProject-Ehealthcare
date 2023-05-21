using System.ComponentModel.DataAnnotations;

namespace E_Healthcare.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string CategoryDescription { get; set; }
        [DataType(DataType.Date)]
        public DateTime CategoryAddedDate { get; set; }
        public List<Medicine>? Medicines { get; set; }
    }
}
