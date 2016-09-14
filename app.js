var app = angular.module("MainApp", ["HomeView"])

.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
        controller: "HomeController",
        templateUrl: "./templates/home.html"
    });
})