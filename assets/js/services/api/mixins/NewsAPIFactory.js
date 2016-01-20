angular.module('starter.services').factory('NewsAPIFactory', function($http) {
  var methods = {

    getNews: function(url, limit) {
      return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' +
        limit +
        '&callback=JSON_CALLBACK&q=' +
        encodeURIComponent(url));
    }
  };

  return methods;
});
