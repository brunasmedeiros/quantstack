const app = angular.module('quantstack', ['ngRoute', 'level', 'basic']);
  
app.config(($routeProvider, $locationProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: "app/templates/landing.html"
    })
    .when('/play', {
      templateUrl: "app/templates/level.html"
    })
    .when('/about', {
      templateUrl: "app/templates/about.html"
    })
    .when('/basic', {
      templateUrl: "app/templates/basic.html"
    })
  $locationProvider.html5Mode(true);
})