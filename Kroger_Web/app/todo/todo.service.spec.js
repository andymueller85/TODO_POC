describe('Service: todoService', function () {
    beforeEach(module('app'));

    var myService,
        mockUtilityService,
        newTodo,
        $httpBackend,
        $rootScope,
        $q;

    beforeEach(module(function ($provide) {        
        mockUtilityService = {
            getUrl: function () {
                return "someUrl"
            }
        };

        $provide.value('utilityService', mockUtilityService);
    }));

    beforeEach(inject(function (todoService, utilityService, _$httpBackend_) {
        newTodo = {
            id: '1234567',
            title: "My Title",
            description: "My Description",
            startDate: "05/22/2015",
            stopDate: "05/26/2015"
        };
        myService = todoService;
        $httpBackend = _$httpBackend_;
    }));

    describe('todoService getTodos', function () {
        it('should make an ajax call to get todos', function () {
            $httpBackend.whenGET("someUrl").respond(200, [newTodo]);
            var response = myService.getTodos();
            $httpBackend.flush();
            expect(response.$$state.value).toEqual([newTodo]);
        });
    });

    describe('todoService deleteTodo', function () {
        it('should make an ajax call to delete a todo', function () {
            $httpBackend.whenDELETE("someUrl").respond(200, "1");
            var response = myService.deleteTodo();
            $httpBackend.flush();
            expect(response.$$state.value).toEqual("1");
        });
    });

    describe('todoService addTodo', function () {
        it('should make an ajax call to delete a todo', function () {
            $httpBackend.whenPOST("someUrl", {
                Title: newTodo.title,
                Description: newTodo.description,
                StartDate: newTodo.startDate,
                StopDate: newTodo.stopDate
            }).respond(200, "1");
            var response = myService.addTodo(newTodo);
            $httpBackend.flush();
            expect(response.$$state.value).toEqual("1");
        });
    });

});