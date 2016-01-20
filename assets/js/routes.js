angular.module('starter.router').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    .state('app.eventcollection', {
      url: '/eventcollection',
      views: {
        'menuContent': {
          templateUrl: 'templates/eventcollection.html',
          controller: 'EventCollectionController'
        }
      }
    })
    .state('app.eventdetails', {
      url: '/eventcollection/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/eventDetails.html',
          controller: 'EventDetailsController'
        }
      }
    })
    .state('app.news', {
      url: '/news',
      views: {
        'menuContent': {
          templateUrl: 'templates/news.html',
          controller: 'NewsController'
        }
      }
    })
    .state('app.custompage', {
      url: '/custompage',
      views: {
        'menuContent': {
          templateUrl: 'templates/custompage.html'
        }
      }
    })
    .state('app.people', {
      url: '/people',
      views: {
        'menuContent': {
          templateUrl: 'templates/people.html',
          controller: 'PeopleController'
        }
      }
    })
    .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html',
          controller: 'PlacesController'
        }
      }
    })
    .state('app.surveycollection', {
      url: '/surveycollection',
      views: {
        'menuContent': {
          templateUrl: 'templates/surveycollection.html',
          controller: 'SurveyCollectionController'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/about');
});
