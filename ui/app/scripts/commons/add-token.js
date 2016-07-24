(function(module) {

  var addToken = function($q, currentUser) {

    var request = function(config) {
      if (currentUser.profile.loggedIn) {
        config.headers.Authorization = "Bearer " + currentUser.profile.token;
      }
      return $q.when(config);
    };

    return {
      request: request
    }
  };

  module.factory("addToken", ['$q', 'CurrentUser', addToken]);
  module.config(function($httpProvider) {
    console.log('intercept!');
    $httpProvider.interceptors.push("addToken");
  });

}(angular.module('commons')));
