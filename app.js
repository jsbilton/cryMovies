// shortcut for function setup iife

(function() {
  'use strict';

  angular
  .module('flix', [
    'ngRoute' //ng route that is an array
  ])
  //routeProvider works with ng-view, injected it and chaining when statements
  .config(function ($routeProvider){
    $routeProvider
      .when('/', {
        template: '<h1>TESTIN</h1><a href="#/flix">GO to FLIX</a><button ng-click="alertMe()">ALERT ME</button>{{writing a message}}',
        controller: 'MainController'
      })
      .when('/flix',{ //templateUrl in order to ref file
        templateUrl: 'views/flix/list.html',
        controller: 'FlixController'
      })
      .when('/flix:flixId',{
        templateUrl: 'views/flix/show.html',
        controller: 'FlixController'
      })
      .when('/flix:flixId/edit',{
        templateUrl: 'views/flix/edit.html',
        controller: 'FlixController'
      })
      .when('/addFlix',{
        templateUrl: 'views/flix/create.html',
        controller: 'FlixController'
      })
      .when('/404',{
        templateUrl: 'views/404.html',
      })
      .otherwise({ redirectTo: '/404'})
  });

}());
