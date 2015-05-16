describe('Controller: TodoController', function () {
    beforeEach(module('app'));

    var ctrl,
        newId,
        newTodo,
        newServerTodo,
        myTitle,
        myDesc,
        myStartDate,
        myEndDate,
        $q,
        $rootScope;
        

    beforeEach(inject(function ($controller, _$q_, _$rootScope_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        newId = '1234567';
        myTitle = "My Title";
        myDesc = "My Description";
        myStartDate = "05/22/2015";
        myEndDate = "05/26/2015"
        newTodo = {
            id: newId,
            title: myTitle,
            description: myDesc,
            startDate: myStartDate,
            endDate: myEndDate
        };
        newServerTodo = {
            Id: newId,
            Title: myTitle,
            Description: myDesc,
            StartDate: myStartDate,
            StopDate: myEndDate
        };

        var todoServiceSpy = jasmine.createSpyObj('todoServiceSpy', ['addTodo', 'getTodos', 'deleteTodo']);
        todoServiceSpy.addTodo.and.returnValue($q.when(newId));
        todoServiceSpy.getTodos.and.returnValue($q.when([newServerTodo]));
        todoServiceSpy.deleteTodo.and.returnValue($q.when(newId));

        var utilityServiceSpy = jasmine.createSpyObj('utilityServiceSpy', ['cloneObj', 'getUrl']);
        utilityServiceSpy.cloneObj.and.returnValue(newTodo);
        utilityServiceSpy.getUrl.and.returnValue("someUrl");
        
        ctrl = $controller('TodoController', { utilityService: utilityServiceSpy, todoService: todoServiceSpy });
        ctrl.newTodo = newTodo;
    }));

    describe('TodoController addTodo', function () {

        it('is defined', function () {
            expect(ctrl.addTodo).toBeDefined();
        });

        it('adds a todo to the todos collection', function () {            
            ctrl.addTodo();
            $rootScope.$digest();

            // it will already have one from initialization. so should be 2
            expect(ctrl.todos.length).toEqual(2);
            expect(ctrl.todos[1]).toEqual(newTodo);
        });
    });

    describe('TodoController getTodos', function () {
        it('gets Todos via the todo service', function () {
            // getTodos is called on initialization
            $rootScope.$digest();
            expect(ctrl.todos.length).toEqual(1);
            expect(ctrl.todos[0]).toEqual(newTodo);
        });
    });

    describe('TodoController deleteTodo', function () {
        it('deletes a todo', function () {
            ctrl.deleteTodo(newId);
            expect(ctrl.todos.length).toEqual(0);
        });
    });
});