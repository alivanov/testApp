angular.module('starter.controllers').controller('PlacesController',
  function($scope,
           $rootScope,
           $ionicModal,
           API) {

    var init = function() {
      API.Places.getPlaces().then(function(res) {
        $scope.places = res;
      }, function(err) {
        console.error(err);
      });
    };

    $ionicModal.fromTemplateUrl('templates/placedetailsModal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.showPlaceDetails = function(place) {
      $scope.selectedPlace = place;
      $scope.selectedPlace.map = { center: { latitude: place.latitude, longitude: place.longitude }, zoom: 10 };
      $scope.selectedPlace.marker = {
        id: 0,
        options: {
          draggable: false,
          labelContent: place.address1,
          labelAnchor: "80 90",
          labelClass: "marker-labels"
        }
      };

      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    init();

  });

