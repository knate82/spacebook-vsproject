angular.module("MainApp")

.controller("VaderController", ["$scope", "HttpService", function ($scope, HttpService) {

    $scope.name = "Darth Vader";

    $scope.getInfo = function (num) {
        HttpService.getPerson(num).then(function (data) {
            $scope.data = data;
            console.log($scope.data);
        })
    }

    $scope.getInfo(4);

}])