var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        controller : "MainController"
    })
    .when("/aboutus", {
        templateUrl : "views/aboutus.html",
        controller : "AboutusController"
    })
    .when("/contactus", {
        templateUrl : "views/contactus.html",
        controller : "ContactusController"
    })
    .when("/blue", {
        templateUrl : "views/dishhome.html",
        controller : "DishController"
    });
});