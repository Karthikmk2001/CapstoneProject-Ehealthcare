using E_Healthcare.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace E_Healthcare.DAL
{
    public class MedicineService : IMedicineService
    {
        private readonly ApplicationDbContext _context;
        public MedicineService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<int> AddMedicineAsync(Medicine medicine)
        {
            var parameter = new List<SqlParameter>();
            parameter.Add(new SqlParameter("@MedicineName", medicine.MedicineName));
            parameter.Add(new SqlParameter("@Price", medicine.Price));
            parameter.Add(new SqlParameter("@AvailableQuantity", medicine.AvailableQuantity));
            parameter.Add(new SqlParameter("@Image", medicine.Image));
            parameter.Add(new SqlParameter("@CategoryId", medicine.CategoryId));
            parameter.Add(new SqlParameter("@MedicineAddedDate", medicine.MedicineAddedDate));

            var result = await Task.Run(() => _context.Database.ExecuteSqlRawAsync(@"exec AddMedicine @MedicineName,@Price,@AvailableQuantity,@Image,@CategoryId,@MedicineAddedDate", parameter.ToArray()));
            return result;
        }

        public async Task<int> DeleteMedicineAsync(int MedicineId)
        {
            var param = new SqlParameter("@MedicineId", MedicineId);



            var result = await Task.Run(() => _context.Database
            .ExecuteSqlRawAsync(@"exec DeleteMedicineById @MedicineId", param)
            );



            return result; 
        }

        public async Task<IEnumerable<Medicine>> GetMedicineByIdAsync(int MedicineId)
        {
            var param = new SqlParameter("@MedicineId", MedicineId);
            var medicineDetails = await Task.Run(() => _context.Medicines.FromSqlRaw(@"exec GetMedicineById @MedicineId", param).ToListAsync());
            return medicineDetails;
        }

        public async Task<List<Medicine>> GetMedicinesListAsync()
        {
            return await _context.Medicines.FromSqlRaw<Medicine>("GetMedicineList").ToListAsync();
        }

        public async Task<int> UpdateMedicineAsync(Medicine medicine, int MedicineId)
        {
            var parameter = new List<SqlParameter>();
            parameter.Add(new SqlParameter("@MedicineId", MedicineId));
            parameter.Add(new SqlParameter("@MedicineName", medicine.MedicineName));
            parameter.Add(new SqlParameter("@Price", medicine.Price));
            parameter.Add(new SqlParameter("@AvailableQuantity", medicine.AvailableQuantity));
            parameter.Add(new SqlParameter("@Image", medicine.Image));
            parameter.Add(new SqlParameter("@CategoryId", medicine.CategoryId));
            parameter.Add(new SqlParameter("@MedicineAddedDate", medicine.MedicineAddedDate));

            var result = await Task.Run(() => _context.Database
            .ExecuteSqlRawAsync(@"exec UpdateMedicineById @MedicineId , @MedicineName, @Price,@AvailableQuantity,@Image,@CategoryId,@MedicineAddedDate",
            parameter.ToArray()));
            return result;
        }

        
    }
}
