(function() {
  'use strict';

  var secretService = function($http) {

    var getSecret = function() {
      return $http.get("http://localhost:8080/secure/message").then(function(response){
        return response.data;
      });
    }

    return {
      getSecret: getSecret
    };
  };

  angular.module('uiApp').factory('SecretService', ['$http', secretService]);
}());
