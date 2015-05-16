describe('Controller: TodoController', function () {

    beforeEach(module('app'));
    beforeEach(module('app.todo'));


    var ctrl;    

    beforeEach(inject(function ($controller, _utilityService_, $q) {
        var mockTodoService = {
            addTodo: function (todo) {
                var deferred = $q.defer();
                deferred.resolve('1234567');
                return deferred.promise;
            }
        }
        ctrl = $controller('TodoController', { utilityService: _utilityService_, todoService: mockTodoService});
    }));

    describe('vm.addTodo', function () {
        it('is defined', function () {
            expect(ctrl.addTodo).toBeDefined();            
        });
    });
});