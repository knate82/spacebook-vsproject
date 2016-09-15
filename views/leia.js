angular.module("MainApp")

.controller("LeiaController", ["$scope", "HttpService", function ($scope, HttpService) {

    $scope.name = "Princess Leia";

    $scope.getInfo = function (num) {
        HttpService.getPerson(num).then(function (data) {
            $scope.data = data;
            console.log($scope.data);
        })
    }

    $scope.getInfo(5);

}])