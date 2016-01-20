angular.module('starter.services').factory('EventsAPISevice', function($http, $q) {
  var methods = {

    getEvents: function() {
      var deferred = $q.defer();
      var options = {
        method: 'GET',
        url: '/source/test-data.json'
      };
      $http(options).success(function(res) {
        deferred.resolve(res.pages.eventcollection.items);
      }).error(function(err) {
        deferred.reject({message: 'Can not get events!'});
      });

      return deferred.promise;
    },

    getEventByID: function(id) {
      var deferred = $q.defer();

      var options = {
        method: 'GET',
        url: '/source/test-data.json'
      };
      $http(options).success(function(res) {
        var event = _.findWhere(res.pages.eventcollection.items, {id: id});
        deferred.resolve(event);
      }).error(function(err) {
        deferred.reject({message: 'Can not get event!'});
      });

      return deferred.promise;
    }
  };

  return methods;
});
