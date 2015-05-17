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
            .then(getTodosComplete)
            .catch(getTodosFailed);

            function getTodosComplete(response) {
                angular.forEach(response, function (value, key) {
                    vm.todos.push({
                        id: value.Id,
                        title: value.Title,
                        description: value.Description,
                        startDate: value.StartDate,
                        stopDate: value.StopDate
                    });
                });
            }
            
            function getTodosFailed(error) {
                alert('An error occurred: ' + error.data.ExceptionMessage);
            }
        }

        function addTodo() {
            if (vm.newTodo.stopDate < vm.newTodo.startDate) {
                alert('Stop Date must be greater than or equal to Start Date');
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
            .then(deleteTodoComplete)
            .catch(deleteTodoFailed);

            function deleteTodoComplete(response) {
                var index = vm.todos.indexOf(todo);
                if (index > -1)
                    vm.todos.splice(index, 1);
            }

            function deleteTodoFailed(error) {
                alert('An error occurred: ' + error.data.ExceptionMessage);
            }
        }
    }
})();