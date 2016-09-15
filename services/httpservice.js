angular.module("MainApp")

.service("HttpService", ["$http", function ($http) {
    var site = "http://swapi.co/api/people/";
    var that = this;

    that.getPerson = function (num) {
        return $http.get(site + num + '/').then(function (response) {

            that.person = response.data;

            return response.data;
        }).then(function (data) {
            return $http.get(data.homeworld).then(function (response) {
                that.person.homeworld = response.data;
                console.log(that.person)
                return that.person;
            })
        })
    }

}])