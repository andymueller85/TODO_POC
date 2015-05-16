(function () {
    'use strict';

    angular
    .module('app.todo')
    .controller('TodoController', TodoController);

    TodoController.$inject = ['utilityService', 'todoService'];

    function TodoController(utilityService, todoService) {
        var vm = this;
        vm.newTodo = {};
        vm.todos = [];
        vm.addTodo = addTodo;
        vm.deleteTodo = deleteTodo;

        activate();

        function activate() {
            getTodos();
        }

        function getTodos() {
            todoService.getTodos()
            .then(getTodosComplete);

            function getTodosComplete(response) {
                angular.forEach(response, function (value, key) {
                    vm.todos.push({
                        id: value.Id,
                        title: value.Title,
                        description: value.Description,
                        startDate: value.StartDate,
                        endDate: value.StopDate
                    });
                });
            }
        }

        function addTodo() {
            if (vm.newTodo.endDate < vm.newTodo.startDate) {
                alert('End Date must be at least Start Date');
            } else {
                todoService.addTodo(vm.newTodo)
                .then(addTodoSuccess)
                .catch(addTodoFailed);
            }

            function addTodoSuccess(response) {
                var newObj = utilityService.cloneObj(vm.newTodo)
                newObj.id = response;
                vm.todos.push(newObj);
                vm.newTodo = {};
            }

            function addTodoFailed(error) {
                alert('An error occurred: ' + error.data.ExceptionMessage);
            }
        }

        function deleteTodo(todo) {
            todoService.deleteTodo(todo.id)
            .then(deleteTodoComplete);

            function deleteTodoComplete() {
                var index = vm.todos.indexOf(todo);
                vm.todos.splice(index, 1);
            }
        }
    }
})();