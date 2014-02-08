var app = angular.module('myApp', [
  'myApp.services',
  'myApp.directives',
  'myApp.filters',
  'myApp.controllers'
  ]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('', {templateUrl: 'inc/home.html', controller: 'MyCtrl1'});
    $routeProvider.when('/about', {templateUrl: 'inc/about.html', controller: 'MyCtrl1'});
    $routeProvider.when('/projects', {templateUrl: 'inc/projects.html', controller: 'MyCtrl1'});
	$routeProvider.when('/services', {templateUrl: 'inc/services.html', controller: 'MyCtrl1'});
	$routeProvider.when('/contact', {templateUrl: 'inc/contact.html', controller: 'MyCtrl1'});
	$routeProvider.when('/terms', {templateUrl: 'inc/terms.html', controller: 'MyCtrl1'});
    $routeProvider.otherwise({redirectTo: ''});
	var header = 'header';
  }]);