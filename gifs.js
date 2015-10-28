(function(){

    var gifs = function($http) {

        var apiKey = '&api_key=dc6zaTOxFJmzC';
        var randomQueryUrl = 'http://api.giphy.com/v1/gifs/random?' + apiKey;
        var trendingQueryUrl = 'http://api.giphy.com/v1/gifs/trending?' + apiKey;

        var randomGif = function(tag) {
            var queryUrl = randomQueryUrl;
            if (tag == '' || tag == undefined) {
                tag = 'cat';
            }
            queryUrl += '&tag=' + tag;
            console.log(queryUrl);

            return $http.get(queryUrl)
                .then(function(response) {
                    console.log(response);
                    return response.data.data;
                });
        };

        var trendingGifs = function(limit) {
            if(limit == '' || limit == undefined) {
                limit = '15';
            }
            var queryUrl = trendingQueryUrl + '&' + limit;

            return $http.get(queryUrl)
                .then(function(response) {
                    return response.data.data;
                });
        };

        return {
            randomGif: randomGif,
            trendingGifs: trendingGifs
        };

    };

    var module = angular.module('gifcity');
    module.factory('gifs', gifs);

}());