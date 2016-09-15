angular.module("MainApp")

.directive("insideNav", function(){
    return {
        templateUrl: "/templates/directiveinsidenav.html",
        restrict: "E",
        scope: {
            nav: "="
        }
    }
})