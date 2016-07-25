(function() {
  'use strict';

  var loginController = function($scope, $state, OAuth, CurrentUser) {
    $scope.loginSubmit = function() {
      if (!!$scope.login) {
        OAuth.login($scope.login.username, $scope.login.password).then(function(data) {
          CurrentUser.setProfile($scope.login.username, data.access_token);
          $scope.user = CurrentUser.profile;
          $state.go('root.home');
        }, function(reason) {
          $scope.error = "Authentication error";
        });
      } else {
        $scope.error = "Wrong username and/or password";
      }
    };
  };

  angular.module('uiApp').controller('LoginController', ['$scope', '$state', 'OAuth', 'CurrentUser', loginController]);
}());
