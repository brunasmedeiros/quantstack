const app = angular.module('quantstack', ['ngRoute']);
  
app.config(($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: "./landing.html"
    })
})