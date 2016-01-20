angular.module('starter.services').factory('PeopleAPIFactory', function($http, $q) {
  var methods = {

    getPeople: function() {
      var deferred = $q.defer();
      var options = {
        method: 'GET',
        url: '/source/test-data.json'
      };
      $http(options).success(function(res) {
        deferred.resolve(res.pages.people.items);
      }).error(function(err) {
        deferred.reject({message: 'Can not get people!'});
      });

      return deferred.promise;
    },

    getPersonByID: function(id) {
      var deferred = $q.defer();

      var options = {
        method: 'GET',
        url: '/source/test-data.json'
      };
      $http(options).success(function(res) {
        var event = _.findWhere(res.pages.people.items, {id: id});
        deferred.resolve(event);
      }).error(function(err) {
        deferred.reject({message: 'Can not get person!'});
      });

      return deferred.promise;
    }
  };

  return methods;
});
