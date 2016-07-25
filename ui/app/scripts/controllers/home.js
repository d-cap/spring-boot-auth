(function() {
  'use strict';
  var mainController = function($scope, user, secret) {
    $scope.user = user;
    $scope.secret = secret;
  };

  angular.module('uiApp').controller('HomeController', ['$scope', 'user', 'secret', mainController]);

}());
