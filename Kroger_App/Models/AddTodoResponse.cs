using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Kroger_App.Models
{
    public class AddTodoResponse : ApiResponse
    {
        public string TodoId { get; set; }
    }
}