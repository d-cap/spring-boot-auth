(function() {
  'use strict';
  var mainController = function($scope, appName) {
    $scope.appName = appName;
  };

  angular.module('uiApp').controller('MainController', ['$scope', 'appName', mainController]);

}());
