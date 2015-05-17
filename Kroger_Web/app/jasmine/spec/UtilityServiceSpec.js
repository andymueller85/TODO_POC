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
            var url = myService.getUrl('todo');
            expect(url).toEqual('http://localhost:41312/api/todo');            
        });
    });

    describe('UtilityService cloneObj', function () {
        it('returns a copy of the original object', function () {
            var obj = {
                val1: "value1",
                val2: "value2",
                val3: [1, 2, 3],
                val4: {inner1: "inner1", inner2: "inner2"}
            };

            var objClone = myService.cloneObj(obj);

            expect(objClone).not.toBe(null);
            expect(objClone.val1).toEqual("value1");
            expect(objClone.val2).toEqual("value2");
            expect(objClone.val3).toEqual([1, 2, 3]);
            expect(objClone.val4).toEqual({ inner1: "inner1", inner2: "inner2" });
        });
    });
});