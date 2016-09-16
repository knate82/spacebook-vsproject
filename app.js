var app = angular.module("MainApp", ["ngRoute"])

.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        controller: "HomeController",
        templateUrl: "/home/home.html"
    })
    .when("/joined", {
        controller: "JoinedController",
        templateUrl: "./Welcome/joined.html"
    })
    .when("/leia", {
        controller: "LeiaController",
        templateUrl: "./leia/leia.html"
    })
    .when("/vader", {
        controller: "VaderController",
        templateUrl: "./vader/vader.html"
    })
    .when("/chewy", {
        controller: "ChewyController",
        templateUrl: "./chewy/chewy.html"
    })
    .when("/solo", {
        controller: "SoloController",
        templateUrl: "./solo/solo.html"
    })
    .when("/luke", {
        controller: "LukeController",
        templateUrl: "./luke/luke.html"
    })
    .when("/yoda", {
        controller: "YodaController",
        templateUrl: "./yoda/yoda.html"
    })
    .otherwise("/home", {
        controller: "HomeController",
        templateUrl: "/home/home.html"
    });
})

.controller("MainController", ["$scope", function($scope){
    
}])