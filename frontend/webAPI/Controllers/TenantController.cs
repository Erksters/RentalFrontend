using System;

namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TenantController : ControllerBase
    {
        /// <summary>
        /// Returns a list of all avaliable tenants
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Tenant> GetAllTenants()
        {
            return "Got them all";
        }

        /// <summary>
        /// Gets a single Tenant using a specific identification key
        /// </summary>
        /// <param name="ID">Tenant's ID </param>
        /// <returns></returns>
        [HttpGet]
        public GetTenantByID(int ID)
        {
            try
            {
                return DatabaseHandler.GetTenantById(ID);
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