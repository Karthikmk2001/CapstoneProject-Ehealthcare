using E_Healthcare.Models;

namespace E_Healthcare.DAL
{
    public interface IMedicineService
    {
        public Task<List<Medicine>> GetMedicinesListAsync();



        public Task<IEnumerable<Medicine>> GetMedicineByIdAsync(int id);



        public Task<int> AddMedicineAsync(Medicine medicine);



        public Task<int> UpdateMedicineAsync(Medicine medicine, int id);



        public Task<int> DeleteMedicineAsync(int id);
    }
}
