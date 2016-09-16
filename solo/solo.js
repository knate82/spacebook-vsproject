angular.module("MainApp")

.controller("SoloController", ["$scope", "HttpService", function ($scope, HttpService) {

    $scope.name = "Han Solo";

    $scope.getInfo = function (num) {
        HttpService.getPerson(num).then(function (data) {
            $scope.data = data;
            console.log($scope.data);
        })
    }

    $scope.getInfo(14);

}])