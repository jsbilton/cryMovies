(function() {
  'use strict';

  angular
    .module('flix')
    .controller('MainController', function ($scope){
      $scope.alertMe = function () {
        _.times(1000, function(){
          console.log("hello");
        })
      };
      $scope.text = "Aloha amigo";
    })
    .controller('FlixController', function($scope, FlixHub){
      FlixHub.getFlix().success(function (flix){
        console.log(flix);
        $scope.cryFilms = flix; //can use in html
      });
      $scope.addFlix = function (newFlix) {
        console.log(newFlix);
        FlixHub.createFlix(newFlix);
      }
    })
}());
