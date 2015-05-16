(function () {
    'use strict';

    angular
        .module('app')
        .factory('utilityService', utilityService);

    function utilityService() {
        var service = {
            cloneObj: cloneObj,
            getUrl: getUrl
        };

        return service;

        function cloneObj(obj) {
            var copy = {};
            for (var attr in obj) {
                copy[attr] = obj[attr];
            }
            return copy;
        }

        function getUrl(location) {
            return "http://localhost:41312/api/" + location;
        }
    }
})();
