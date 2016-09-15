var app = angular.module("MainApp", ["ngRoute"])

.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        controller: "HomeController",
        templateUrl: "templates/home.html"
    })
    .when("/joined", {
        controller: "JoinedController",
        templateUrl: "./templates/joined.html"
    });
})

.controller("MainController", ["$scope", function($scope){
    
}])