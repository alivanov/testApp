angular.module('starter.services').factory('CollectionsAPIFactory', function($http) {

  var methods = {
    getCollections: function() {
      var options = {
        method: 'GET',
        url: '/source/test-data.json'
      };
      return $http(options);
    }
  };

  return methods;
});
