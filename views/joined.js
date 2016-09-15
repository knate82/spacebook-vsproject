angular.module("MainApp")

.controller("JoinedController", ["$scope", "HttpService", function($scope, HttpService){
    
    $scope.name = "Jar Jar Binks";
    
    $scope.getInfo = function(num) {
        HttpService.getPerson(num).then(function(data){
            $scope.data = {
                height: HttpService.height,
                gender: HttpService.gender,
                homeworld: data.name
            }
        })
    }
    
    $scope.getInfo(36);
    
}])