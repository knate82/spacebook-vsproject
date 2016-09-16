angular.module("MainApp")

.controller("JoinedController", ["$scope", "HttpService", "SuggestService", function ($scope, HttpService, SuggestService) {

    $scope.name = "Jar Jar Binks";

    $scope.getInfo = function (num) {
        HttpService.getPerson(num).then(function (data) {
            $scope.data = data;
            console.log($scope.data);
        })
    }

    $scope.getInfo(36);
    
    $scope.suggestedFriends = function() {
        $scope.mayKnow = SuggestService.getSuggestions();
    }
    
    $scope.suggestedFriends();
    
    $scope.question = SuggestService.people;

}])