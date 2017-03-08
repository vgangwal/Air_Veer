var myApp = angular.module('pantheonApp', ['ngRoute', 'albumModule', 'homeModule'])
  .config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "home.html",
      controller: 'homeCtlr'
    })
    .when('/album', {
      templateUrl: 'album.html',
      controller: 'albumCtlr'
    })
    .otherwise({
      redirectTo: '/'
    })
  })