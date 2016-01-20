describe('EventCollectionController', function () {

  var scope;
  var _API;

  beforeEach(module('starter.controllers'));
  beforeEach(inject(function($rootScope, $controller, $q) {

    _API = {
      Events: {
        getEvents: function() {}
      }
    };

    var deferred = $q.defer();
    deferred.resolve('fake data');

    spyOn(_API.Events, 'getEvents').and.returnValue(deferred.promise);

    scope = $rootScope.$new();
    $controller('EventCollectionController', {$scope: scope, API: _API});

    $rootScope.$digest();

  }));

  it('should call API.Events.getEvents', function() {
    expect(_API.Events.getEvents).toHaveBeenCalled();
  });

  it('should init events', function() {
    expect(scope.events).toEqual('fake data');
  });

});
