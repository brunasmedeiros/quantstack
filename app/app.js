const app = angular.module('quantstack', ['ngRoute', 'landing']);
  
app.config(($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: "app/templates/landing.html"
    })
})