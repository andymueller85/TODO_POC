using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Kroger_App.Models
{
    public class Todo
    {
        public String Id { get; set; }

        public String Title { get; set; }

        public String Description { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime StopDate { get; set; }
    }
}