using Kroger_App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Kroger_App.Controllers
{
    [EnableCors(origins: "http://localhost:51313", headers: "*", methods: "*")]
    public class TodoController : ApiController
    {
        // POST: api/Todo
        public string Post([FromBody]Todo value)
        {
            // save to DB
            
            // return Todo ID
            return Guid.NewGuid().ToString();
        }
    }
}
