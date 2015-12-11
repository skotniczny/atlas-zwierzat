'use strict';

// Declare app level module which depends on views, and components
var animalsApp = angular.module('animalsApp', [
  'ngRoute',
  'animalsControllers',
  'myApp.version'
]);

animalsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        title: 'Atlas Zwierząt Polski',
        templateUrl: 'partials/animals-list.html',
        controller: 'AnimalsListCtrl'
      }).
      when('/classes', {
        title: 'Gromady | Atlas Zwierząt Polski',
        templateUrl: 'partials/animals-classes.html',
        controller: 'AnimalClassesCtrl'
      }).
      when('/site-index', {
        title: 'Skorowidz | Atlas Zwierząt Polski',
        templateUrl: 'partials/animals-index.html',
        controller: 'AnimalsIndexCtrl'
      }).
      when('/animals/:animalId', {
        templateUrl: 'partials/animal-detail.html',
        controller: 'AnimalDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);

animalsApp.run(['$rootScope', function($rootScope) {
    $rootScope.page = {
      setTitle: function(title) {
          this.title = title;
      }
    };

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      $rootScope.page.setTitle(current.$$route.title || 'Atlas Zwierząt Polski');
    });
}]);

