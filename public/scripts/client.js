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
        controller: "projectController"
      }).
      when("/resume", {
        templateUrl: "/views/routes/resume.html",
        controller: "homeController"
      }).
      when("/photography", {
        templateUrl: "/views/routes/photography.html",
        controller: "projectController"
      }).
      when("/web", {
        templateUrl: "/views/routes/web.html",
        controller: "projectController"
      }).
      when("/color", {
        templateUrl: "/views/routes/color.html",
        controller: "projectController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
