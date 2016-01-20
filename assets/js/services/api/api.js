angular.module('starter.services').factory('API',
  function(CollectionsAPIFactory,
           EventsAPIFactory,
           NewsAPIFactory) {

    var api = {
      Collections: {},
      Events: {},
      News: {}
    };

    angular.extend(api.Collections, CollectionsAPIFactory);
    angular.extend(api.Events, EventsAPIFactory);
    angular.extend(api.News, NewsAPIFactory);

    return api;
  });
