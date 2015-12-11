'use strict';

/* Controllers */

var animalsControllers = angular.module('animalsControllers', []);

animalsControllers.controller('AnimalsListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('animals/animals.json').success(function(data) {
    $scope.animals = data;
  });
}]);

animalsControllers.controller('AnimalsIndexCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('animals/animals.json').success(function(data) {
    $scope.pageIndex = {};
    data.forEach(function(animal) {
      var firstLetter = animal.name.charAt(0);
      if (!$scope.pageIndex[firstLetter]) {
        $scope.pageIndex[firstLetter] = [animal];
      } else {
        $scope.pageIndex[firstLetter].push(animal);
      }
    });
  });
}])
.directive('indexMenu', function() {
  return {
    restrict: 'A',
    template: '<li class="menu-item" ng-repeat="(key, value) in pageIndex"><a href ng-click="gotoHash(key)">{{key}}</a></li>'
  };
});

animalsControllers.controller('AnimalDetailCtrl', ['$scope', '$routeParams', '$http', '$sce',
  function($scope, $routeParams, $http, $sce) {
    $http.get('animals/' + $routeParams.animalId + '.json').success(function(data) {
      $scope.animal = data;
      // quotation marks replace
      var dev = data.development.replace(/"(.*?)"/ig, "&bdquo;$1&rdquo;");
      $scope.development = $sce.trustAsHtml(dev);
      $scope.page.setTitle(data.name);
    });
}]);

animalsControllers.controller('AnimalClassesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('animals/classes.json').success(function(data) {
    $scope.classes = data;
  });
  $scope.orderProp = 'id';

  $scope.tab = 'owady';
  $scope.isSet = function(checkTab) {
    return $scope.tab === checkTab;
  };
  $scope.setTab = function(setTab) {
    // var title = setTab.charAt(0).toUpperCase() + setTab.slice(1) + ' | Atlas Zwierząt Polski';
    // $scope.page.setTitle(title);
    $scope.tab = setTab;
  };
}]);

animalsControllers.controller('ButtonsCtrl', ['$scope', '$window', function($scope, $window) {
  $scope.print = function() {
    $window.print();
  };
  $scope.back = function() {
    $window.history.back();
  };
}]);

animalsControllers.controller('ScrollController', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
  $scope.gotoHash = function(id) {
    var old = $location.hash();
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash(id);
    // call $anchorScroll()
    $anchorScroll();
    $location.hash(old);
  };
}]);