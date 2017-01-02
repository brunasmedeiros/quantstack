const app = angular.module('quantstack', ['ngRoute', 'level']);
  
app.config(($routeProvider, $locationProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: "app/templates/landing.html"
    })
    .when('/play', {
      templateUrl: "app/templates/level.html"
    })
  $locationProvider.html5Mode(true);
})