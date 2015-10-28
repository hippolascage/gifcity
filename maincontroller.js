(function() {

    var MainController = function ($scope, $location) {
        $scope.greeting = "what you want?";

        $scope.randomCat = function() {
            $location.path("/cats");
        };

        $scope.whatsTrending = function() {
            $location.path("/trending");
        };
        
    };

    var app = angular.module('gifcity');
    app.controller('MainController', MainController);
}());
