angular.module('starter.services').factory('API',
  function(CollectionsAPIFactory,
           EventsAPIFactory,
           NewsAPIFactory,
           PeopleAPIFactory,
           PlacesAPIFactory) {

    var api = {
      Collections: {},
      Events: {},
      News: {},
      People: {},
      Places: {}
    };

    angular.extend(api.Collections, CollectionsAPIFactory);
    angular.extend(api.Events, EventsAPIFactory);
    angular.extend(api.News, NewsAPIFactory);
    angular.extend(api.People, PeopleAPIFactory);
    angular.extend(api.Places, PlacesAPIFactory);

    return api;
  });
