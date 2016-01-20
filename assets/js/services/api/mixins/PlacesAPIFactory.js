angular.module('starter.services').factory('PlacesAPIFactory', function($http, $q) {
  var methods = {

    getPlaces: function() {
      var deferred = $q.defer();
      var options = {
        method: 'GET',
        url: '/source/test-data.json'
      };
      $http(options).success(function(res) {
        deferred.resolve(res.pages.contact.items);
      }).error(function(err) {
        deferred.reject({message: 'Can not get places!'});
      });

      return deferred.promise;
    },

    getPlaceByID: function(id) {
      var deferred = $q.defer();

      var options = {
        method: 'GET',
        url: '/source/test-data.json'
      };
      $http(options).success(function(res) {
        var event = _.findWhere(res.pages.places.items, {id: id});
        deferred.resolve(event);
      }).error(function(err) {
        deferred.reject({message: 'Can not get place!'});
      });

      return deferred.promise;
    }
  };

  return methods;
});
