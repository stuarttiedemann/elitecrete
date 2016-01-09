var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider.when('/',{
		templateUrl:'home.html',
		controller:'myController'
	}).
	when('/reflector.html',{
		templateUrl:'reflector.html',
		controller:'myController'
	}).
	when('/industrial.html',{
		templateUrl:'industrial.html',
		controller:'myController'
	}).
	when('/overlay.html',{
		templateUrl:'overlay.html',
		controller:'myController'
	}).
	when('/gallery.html',{
		templateUrl:'gallery.html',
		controller:'myController'
	}).
	when('/contact.html',{
		templateUrl:'contact.html',
		controller:'myController'
	}).
	otherwise({
		redirectTo:'/'
	});
}]);

myApp.controller('myController',['$scope','$location',function($scope,$location){
	$scope.galleryItem = galleryItem;
	
	$scope.home=function(){
		$location.path('/');
	}
	$scope.reflector=function(){
		$location.path('/reflector.html');
	}
	$scope.industrial=function(){
		$location.path('/industrial.html');
	}
	$scope.overlay=function(){
		$location.path('/overlay.html');
	}
	$scope.gallery=function(){
		$location.path('/gallery.html');
	}
	$scope.contact=function(){
		$location.path('/contact.html');
	}

}]);