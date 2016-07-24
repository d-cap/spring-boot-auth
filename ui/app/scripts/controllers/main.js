(function() {
  'use strict';
  var mainController = function($scope, OAuth, CurrentUser, AppNameService, SecretService) {
    AppNameService.getAppName().then(function(data) {
      $scope.message = data.name;
      $scope.user = CurrentUser.profile;
    });

    $scope.loginSubmit = function() {
      OAuth.login($scope.login.username, $scope.login.password).then(function(data) {
        CurrentUser.setProfile($scope.login.username, data.access_token);
        $scope.user = CurrentUser.profile;
        SecretService.getSecret().then(function(secretData){
          $scope.secret = secretData;
        });
      });
    };
  };

  angular.module('uiApp').controller('MainController', ['$scope', 'OAuth', 'CurrentUser', 'AppNameService', 'SecretService',  mainController]);

}());
