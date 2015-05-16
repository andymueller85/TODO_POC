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

        function addTodo() {
            todoService.addTodo(vm.newTodo)
            .then(addTodoSuccess)
            .catch(addTodoFailed);

            function addTodoSuccess(response) {
                var newObj = utilityService.cloneObj(vm.newTodo)
                vm.todos.push(newObj);
                vm.newTodo = {};
            }

            function addTodoFailed(error) {
                alert('An error occurred: ' + error.data.ExceptionMessage);
            }
        }
    }
})();