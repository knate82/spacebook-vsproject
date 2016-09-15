angular.module("MainApp")

.service("HttpService", ["$http", function($http){
    var site = "http://swapi.co/api/people/";
    var that = this;
    
    that.getPerson = function(num) {
        return $http.get(site + num + '/').then(function(response) {
            
            that.height = response.data.height;
            that.gender = response.data.gender;
            
            return response.data;
        }).then(function(data){
            return $http.get(data.homeworld).then(function(response){
                
                return response.data;
            })
        })
    }
    
}])