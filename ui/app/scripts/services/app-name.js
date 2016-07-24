(function() {
  'use strict';

  var appNameService = function($http) {
    var getAppName = function() {
      return $http.get('http://localhost:8080/home/name').then(function(response) {
        return response.data;
      });
    };

    return {
      getAppName: getAppName
    };
  };

  angular.module('uiApp').factory('AppNameService', ['$http', appNameService]);
}());
