using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApiAssignment.Datastore;
using WebApiAssignment.Datastore.DataModels;

namespace webAPI.Controllers{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentController : ControllerBase
    {
        /// <summary>
        /// Returns a list of all avaliable tenants
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Tenant> GetAllApartments()
        {
            return "Got them all";
        }

        /// <summary>
        /// Gets a single PropertyOwner using a specific identification key
        /// </summary>
        /// <param name="ID">Property Owner's ID</param>
        /// <returns></returns>
        [HttpGet]
        public GetApartmentByID(int ID)
        {
            try
            {
                return DatabaseHandler.GetApartmentById(ID);
            }
            catch (Exception ex)
            {
                if (ex.Message.Equals("Not Found"))
                {
                    return NotFound();
                }
                else
                {
                    throw ex;
                }
            }
        }
    }
}