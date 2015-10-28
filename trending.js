(function() {

    var TrendingController = function ($scope, gifs) {
        $scope.trending;
        $scope.imageSource;

        $scope.getTrendingGifs = function() {
            gifs.trendingGifs()
                .then(getTrendingSuccess, getTrendingFail);
        };

        var getTrendingSuccess = function(response) {
            console.log(response);
            $scope.trending = response;
        };

        var getTrendingFail = function(error) {
            console.log(error);
        };

        $scope.getTrendingGifs();
    };

    var app = angular.module('gifcity');
    app.controller('TrendingController', TrendingController);
}());
