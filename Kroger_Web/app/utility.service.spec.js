describe('Service: utilityService', function () {
    beforeEach(module('app'));

    var $injector,
        myService;

    beforeEach(function () {
        $injector = angular.injector(['app']);
        myService = $injector.get('utilityService');
    });

    describe('UtilityService getUrl', function () {
        it('returns the appended URL', function () {
            var url = myService.getUrl('foo');
            expect(url).toEqual('http://localhost:41312/api/foo');            
        });
    });
});