using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace webAPI.Controllers
{
    [ApiContoller]
    [Route("[api/controller]")]
    public class DatabaseController : ControllerBase
    {
        /// <summary>
        /// Returns a list of all avaliable tenants
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Tenant> GetAllPropertyOwners()
        {
            return "Got them all";
        }

        /// <summary>
        /// Gets a single PropertyOwner using a specific identification key
        /// </summary>
        /// <param name="ID">Property Owner's ID</param>
        /// <returns></returns>
        [HttpGet]
        public GetPropertyOwnerByID(int ID)
        {
            try
            {
                return DatabaseHandler.GetPropertyOwnerById(ID);
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