(function(module) {
  'use strict';

  var currentUser = function(localStorage) {

    var initProfile = function() {
      var user = {
        username: "",
        token: "",
        get loggedIn() {
          return this.token ? true : false;
        }
      };
      return user;
    };

    var setProfile = function(username, token) {
      profile.username = username;
      profile.token = token;
      localStorage.add(localStorage.USERKEY, profile);
    };

    var profile = initProfile();

    return {
      profile: profile,
      setProfile: setProfile
    };
  };

  module.factory("CurrentUser", ['LocalStorage', currentUser]);
}(angular.module('commons')));
