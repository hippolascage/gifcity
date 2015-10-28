(function() {

    var app = angular.module('gifcity', ['ngRoute', 'ui.bootstrap']);

    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .when("/trending", {
                templateUrl: "trending.html",
                controller: "TrendingController"
            })
            .when("/cats", {
                templateUrl: "cats.html",
                controller: "CatsController"
            })
            .otherwise({
                redirectTo: "/"
            });
    });

    app.directive('gifPreview', function() {
        return {
            template: '<div>not broken</div>',
            replace: true
        }
    });

}());