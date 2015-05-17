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
        // GET: api/Todo
        public List<Todo> Get()
        {
            // stub.  Would get values from DB here.
            
            // Just return some seeded Todos.  No persistence between page loads.
            return new List<Todo>()
            {
                new Todo()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "Task 1",
                    Description = "This is the first task",
                    StartDate = DateTime.Today,
                    StopDate = DateTime.Today.AddDays(5)
                },
                new Todo()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "Task 2",
                    Description = "This is the second task",
                    StartDate = DateTime.Today.AddDays(6),
                    StopDate = DateTime.Today.AddDays(12)
                }
            };
        }

        // POST: api/Todo
        public string Post([FromBody]Todo value)
        {
            // stub.  would save to DB here            
            
            // return Todo ID
            return Guid.NewGuid().ToString();
        }

        // DELETE: api/Todo/5
        public string Delete(string id)
        {
            // Stub.  would delete record from the DB here

            return id;
        }
    }
}
