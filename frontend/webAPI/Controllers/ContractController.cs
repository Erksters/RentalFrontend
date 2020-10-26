using System;

namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContractController : ControllerBase
    {
        /// <summary>
        /// Returns a list of all avaliable tenants
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Tenant> GetAllContracts()
        {
            return "Got them all";
        }

        /// <summary>
        /// Gets a single Contract using a specific identification key
        /// </summary>
        /// <param name="ID">Contract ID</param>
        /// <returns></returns>
        [HttpGet]
        public GetContractByID(int ID)
        {
            try
            {
                return DatabaseHandler.GetContractById(ID);
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