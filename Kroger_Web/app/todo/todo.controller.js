(function () {
    'use strict';

    angular
    .module('app.todo')
    .controller('TodoController', TodoController);

    function TodoController() {
        var vm = this;
        vm.world = "WORLD";
    }
})();