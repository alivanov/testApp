angular.module('starter.controllers').controller('PeopleController',
  function($scope,
           $rootScope,
           $ionicModal,
           API) {

    var init = function() {
      API.People.getPeople().then(function(res) {
        $scope.people = res;
      }, function(err) {
        console.error(err);
      });
    };

    $ionicModal.fromTemplateUrl('templates/persondetailsModal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.showPersonDetails = function(person) {
      $scope.selectedPerson = person;
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    init();

  });

