angular.module('starter.services').factory('API',
  function(EventsAPISevice) {

    var api = {
      Events: {}
    };

    angular.extend(api.Events, EventsAPISevice);

    return api;
  });
