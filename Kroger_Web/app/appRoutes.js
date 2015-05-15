(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.when('/todo',
        {
            templateUrl: '/app/todo/todo.html',
            controller: 'TodoController as vm',
            caseInsensitiveMatch: true
        })
        .otherwise({
            redirectTo: '/todo'
        });
    }
})();
