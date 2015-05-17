(function () {
    'use strict';

    angular
        .module('app')
        .factory('utilityService', utilityService);

    function utilityService() {
        var service = {
            getUrl: getUrl
        };

        return service;

        function getUrl(location) {
            return "http://localhost:41312/api/" + location;
        }
    }
})();
