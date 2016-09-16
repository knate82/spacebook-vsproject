angular.module("MainApp")

.controller("YodaController", ["$scope", "HttpService", function ($scope, HttpService) {

    $scope.name = "Master Yoda I am";

    $scope.getInfo = function (num) {
        HttpService.getPerson(num).then(function (data) {
            $scope.data = data;
            console.log($scope.data);
        })
    }

    $scope.getInfo(20);

}])