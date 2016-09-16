angular.module("MainApp")

.controller("ChewyController", ["$scope", "HttpService", function ($scope, HttpService) {

    $scope.name = "Chewbacca";

    $scope.getInfo = function (num) {
        HttpService.getPerson(num).then(function (data) {
            $scope.data = data;
            console.log($scope.data);
        })
    }

    $scope.getInfo(13);

}])