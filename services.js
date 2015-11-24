(function() {
  'use strict';

  angular.module('flix') //attach main module
    .factory('FilmHub', function($http) {
        var url = 'http://tiny-tiny.herokuapp.com/collections/rudy';
        // adding the movie method
        var addFlix = function(newFlix) {
            $http.post(url, newFlix);
        };
    });
        var getFlix = function() {
            return $http.get(url); //going to id in controller
        };
        var removeFlix = function() {
            $http.delete(url, deleteFlix);
        }
        return {
            createFlix: addFlix,
            getFlix: getFlix,
            deleteFlix: removeFlix
        };
});
