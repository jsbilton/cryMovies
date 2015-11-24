(function() {
  'use strict';
   angular
   .module('flix')
   .controller('MainController', function($scope) {
      var updateFlix = function() {
        FlixHub.getFlix().success(function(flix) {
        $scope.flix = flix;
      });
  };
      updateFlix();
  });
});
    .controller('FlixController', function($scope, FlixHub){
      FlixHub.getFlix().success(function (flix){
        console.log(flix);
        $scope.cryFilms = flix; //can use in html
      });
    $scope.addFlix = function(newFlix) {
        console.log(newFlix);
        FlixHub.createFlix(newFlix);
    };
    $scope.deleteFlix = function(flix) {
        FlixHub.deleteFlix(flix);
    };
