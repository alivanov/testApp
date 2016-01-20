angular.module('starter.controllers').controller('SurveyCollectionController',
  function($scope,
           API,
           $ionicPopup) {

    var init = function() {
      API.Collections.getCollections()
        .success(function(res) {
          $scope.surveys = res.pages.surveycollection;
          $scope.item = _.findWhere($scope.surveys.items[0].questions, {id: '6'});
        })
        .error(function(err) {
          console.error(err);
        });
    };

    $scope.submit = function(data) {
      $ionicPopup.alert({
        title: 'Submitted!',
        template: 'Submitted option: ' + data.text
      });
      console.log('submitted', data);
    };

    init();

  });
