(function() {
  'use strict';

    angular
    .module('flix') //attach main module
    .factory('FilmHub', function ($http){
      var url = 'http://tiny-tiny.herokuapp.com/collections/rudy';

// adding the movie method
      var addFlix = function (newFlix) {
        $http.post(url, newFlix).then(function (camp){
          console.log(camp);
        });
      var getFlix = function (){
          return $http.get(url); //going to id in controller
        };
        return {
          createFlix: addFlix,
          getFlix: getFlix //, deleteFlix: removeFlix
        }
      }
    })


}());
