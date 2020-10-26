using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace webAPI{
    [ApiContoller]
    [Route("[controller]")]
    public class DatabaseController : ControllerBase
    {
        [HttpGet]
        public Get(){
            
        }
    }
}