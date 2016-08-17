console.log("client.js is sourced");

var myApp = angular.module('myApp', [ 'ngRoute' ] );

console.log("is there a problem here?");

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
      when("/home", {
          templateUrl: "/views/routes/home.html",
          controller: "homeController"
      }).
      when("/about", {
        templateUrl: "/views/routes/about.html",
        controller: "homeController"
      }).
      when("/projects", {
        templateUrl: "/views/routes/projects.html",
        controller: "homeController"
      }).
      when("/resume", {
        templateUrl: "/views/routes/resume.html",
        controller: "homeController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
