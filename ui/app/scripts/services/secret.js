(function() {
  'use strict';

  var secretService = function($http, $state) {

    var getSecret = function() {
      return $http.get("http://localhost:8080/secure/message").then(function(response){
        return response.data;
      }, function(reason) {
        $state.go('root.main');
      });
    }

    return {
      getSecret: getSecret
    };
  };

  angular.module('uiApp').factory('SecretService', ['$http', '$state', secretService]);
}());
