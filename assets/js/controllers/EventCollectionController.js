angular.module('starter.controllers').controller('EventCollectionController',
  function($scope,
           API) {

    var init = function() {
      API.Events.getEvents().then(function(res) {
        $scope.events = res;
      }, function(err) {
        console.error(err);
      });
    };

    init();

  });

