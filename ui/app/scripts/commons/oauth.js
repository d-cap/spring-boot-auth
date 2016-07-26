(function(module) {
  'use strict';

  var oauth = function($http, formEncode) {
    var login = function(username, password) {

      var config = {
        headers: {
          "Accept": "application/json",
          "Content-type": "application/x-www-form-urlencoded",
          Authorization: "Basic dWktY2xpZW50OnVpLXNlY3JldA=="
        }
      }

      var data = formEncode({
        username: username,
        password: password,
        client_id: 'ui-client',
        client_secret: 'ui-secret',
        grant_type: "password",
        scope: "openid"
      });

      return $http.post("http://localhost:8081/uaa/oauth/token", data, config).then(function(response) {
        return response.data;
      });
    };

    return {
      login: login
    };
  };

  module.factory('OAuth', ['$http', 'formEncode', oauth]);
}(angular.module('commons')));
