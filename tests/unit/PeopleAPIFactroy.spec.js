describe('PeopleAPIFactory', function () {

  var _API;
  var http;
  var fakeResponse = {
    pages: {
      people: {
        items: []
      }
    }
  };

  beforeEach(module('starter.services'));
  beforeEach(inject(function($injector, _$httpBackend_) {
    http = _$httpBackend_;
    _API = $injector.get('PeopleAPIFactory');
  }));

  afterEach(function () {
    http.verifyNoOutstandingExpectation();
    http.verifyNoOutstandingRequest();
  });

  describe('constructor', function() {
    it('should not be null when initialized', function () {
      expect(typeof _API).not.toBeNull();
    });
  });

  describe('getPeople', function () {
    it('should be able to be called', function () {
      http.expectGET('/source/test-data.json').respond(fakeResponse);
      _API.getPeople();
      http.flush();
    });
  });

  describe('getPersonByID', function () {

    beforeEach(function() {
      http.expectGET('/source/test-data.json').respond(fakeResponse);
    });

    it('should be able to be called', function () {
      _API.getPersonByID();
      http.flush();
    });

    it('should find a person by id', function () {
      spyOn(_, 'findWhere').and.callThrough();
      _API.getPersonByID(10);
      http.flush();
      expect(_.findWhere).toHaveBeenCalledWith(fakeResponse.pages.people.items, {id: 10})
    });
  });


});

