angular.module("MainApp")

.controller("LukeController", ["$scope", "HttpService", function ($scope, HttpService) {

    $scope.name = "Luke Skywalker";

    $scope.getInfo = function (num) {
        HttpService.getPerson(num).then(function (data) {
            $scope.data = data;
            console.log($scope.data);
        })
    }

    $scope.getInfo(1);

}])