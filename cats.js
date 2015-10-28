(function() {

    var CatsController = function($scope, gifs) {

        $scope.tag;

        $scope.getRandomGif = function() {
            gifs.randomGif($scope.tag)
                .then(getRandomSuccess, getRandomFail);
        };

        var getRandomSuccess = function(response) {
            $scope.randomGif = response;
        };

        var getRandomFail = function(error) {
            console.log(error);
            $scope.randomGif = null;
        };

        $scope.getRandomGif();

    };

    var app = angular.module('gifcity');
    app.controller('CatsController', CatsController);
}());
