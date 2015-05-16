using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Kroger_App.Controllers;

namespace Kroger_App.Tests
{
    [TestClass]
    public class ApiTests
    {
        // not much going on on the server to test...

        [TestMethod]
        public void Test_TodoPostReturnsValue()
        {
            var todo = new TodoController();

            var ret = todo.Post(new Models.Todo()
                        {
                            Title = "myTitle",
                            Description = "myDescription",
                            StartDate = DateTime.Now,
                            StopDate = DateTime.Now.AddDays(10)
                        });

            Assert.IsNotNull(ret);
        }

        [TestMethod]
        public void Test_TodoGetReturnsValues()
        {
            var todo = new TodoController();
            var ret = todo.Get();
            Assert.IsNotNull(ret);
            Assert.AreEqual(2, ret.Count);
        }

        [TestMethod]
        public void Test_TodoDeleteSucceeds()
        {
            var id = Guid.NewGuid().ToString();
            var todo = new TodoController();
            var ret = todo.Delete(id);
            Assert.AreEqual(id, ret);
        }
    }
}
