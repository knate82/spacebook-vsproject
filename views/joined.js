angular.module("MainApp")

.controller("JoinedController", ["$scope", "HttpService", function ($scope, HttpService) {

    $scope.name = "Jar Jar Binks";

    $scope.getInfo = function (num) {
        HttpService.getPerson(num).then(function (data) {
            $scope.data = data;
            console.log($scope.data);
        })
    }

    $scope.getInfo(36);

}])