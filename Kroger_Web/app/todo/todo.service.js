﻿(function () {
    'use strict';

    angular
        .module('app.todo')
        .factory('todoService', todoService);

    todoService.$inject = ['$http', 'utilityService'];

    function todoService($http, utilityService) {
        var service = {
            addTodo: addTodo,
            getTodos: getTodos,
            deleteTodo: deleteTodo
        };

        return service;

        function addTodo(todo) {
            return $http.post(utilityService.getUrl('todo'), {
                Title: todo.title,
                Description: todo.description,
                StartDate: todo.startDate,
                StopDate: todo.stopDate
            })
            .then(addTodoComplete)
            .catch(addTodoError);

            function addTodoComplete(response) {
                console.log("Todo ID: " + response.data + " successfully added");
                return response.data;
            }

            function addTodoError(error) {
                console.log("error adding Todo: " + error);
                throw (error);
            }
        }

        function getTodos() {
            return $http.get(utilityService.getUrl('todo'))
            .then(getTodosComplete);

            function getTodosComplete(response) {
                return response.data;
            }
        }

        function deleteTodo(id) {
            return $http.delete(utilityService.getUrl('todo/' + id))
            .then(deleteTodoComplete);

            function deleteTodoComplete(response) {
                console.log("deleted todo " + response.data);
                return;
            }
        }
    }

})();
