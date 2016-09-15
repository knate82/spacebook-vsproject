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
    })
    .when("/leia", {
        controller: "LeiaController",
        templateUrl: "./templates/leia.html"
    })
    .when("/vader", {
        controller: "VaderController",
        templateUrl: "./templates/vader.html"
    })
    .when("/chewy", {
        controller: "ChewyController",
        templateUrl: "./templates/chewy.html"
    })
    .when("/solo", {
        controller: "SoloController",
        templateUrl: "./templates/solo.html"
    })
})

.controller("MainController", ["$scope", function($scope){
    
}])