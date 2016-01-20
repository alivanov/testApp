angular.module('starter.services').factory('API',
  function(CollectionsAPIFactory,
           EventsAPIFactory,
           NewsAPIFactory,
           PeopleAPIFactory) {

    var api = {
      Collections: {},
      Events: {},
      News: {},
      People: {}
    };

    angular.extend(api.Collections, CollectionsAPIFactory);
    angular.extend(api.Events, EventsAPIFactory);
    angular.extend(api.News, NewsAPIFactory);
    angular.extend(api.People, PeopleAPIFactory);

    return api;
  });
