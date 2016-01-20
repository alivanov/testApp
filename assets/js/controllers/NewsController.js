angular.module('starter.controllers').controller('NewsController',
  function($scope,
           $cordovaInAppBrowser,
           API) {

    var init = function() {

      API.Collections.getCollections()
        .then(function(res) {
          return res.data.pages.news;
        })
        .then(function(page) {
          API.News.getNews(page.rssFeed, page.rssLimit).success(function(res) {
            $scope.feed = res.responseData.feed;
          }).error(function(err) {
            console.log(err);
          });
        })
    };

    $scope.openLink = function(url) {
      $cordovaInAppBrowser.open(url, '_blank', {location: 'yes', clearcache: 'yes', toolbar: 'no'});
    };

    init();

  });
