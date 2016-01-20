angular.module('starter.controllers').controller('EventDetailsController',
  function($scope,
           $state,
           API) {

    var init = function() {
      API.Events.getEventByID($state.params.id).then(function(res) {
        $scope.event = res;
      }, function(err) {
        console.error(err);
      });
    };

    init();

  });
