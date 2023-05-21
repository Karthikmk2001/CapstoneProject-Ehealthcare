using E_Healthcare.DAL;
using E_Healthcare.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Healthcare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineController : ControllerBase
    {
        private readonly IMedicineService medicineService;
        public MedicineController(IMedicineService medicineService)
        {
            this.medicineService = medicineService;
        }
        [HttpGet("GetMedicineList")]
        public async Task<List<Medicine>> GetMedicinesListAsync()
        {
            try
            {
                return await medicineService.GetMedicinesListAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpGet("GetMedicineById")]
        public async Task<IEnumerable<Medicine>> GetMedicineByIdAsync(int MedicineId)
        {
            try
            {
                var response = await medicineService.GetMedicineByIdAsync(MedicineId);
                if (response == null)
                {
                    return null;
                }
                return response;

            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("AddMedicine")]
        public async Task<IActionResult> AddMedicineAsync(Medicine medicine)
        {
            if (medicine == null)
            {
                return BadRequest();
            }
            try
            {
                var response = await medicineService.AddMedicineAsync(medicine);
                return Ok(response);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [EnableCors]
        [HttpPut("UpdateMedicineById")]
        public async Task<int> UpdateMedicineAsync(Medicine medicine, int MedicineId)
        {
            try
            {
                var response = await medicineService.UpdateMedicineAsync(medicine, MedicineId);
                return response;
            }
            catch (Exception)
            {
                throw;
            }
        }


        [HttpDelete("DeleteMedicineById")]



        public async Task<int> DeleteMedicineByIdAsync(int MedicineId)
        {
            try
            {
                var response = await medicineService.DeleteMedicineAsync(MedicineId);
                return response;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
