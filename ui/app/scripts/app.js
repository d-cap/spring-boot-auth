(function() {
  'use strict';

  var authorized = ['$q', '$timeout', '$state', 'CurrentUser', function($q, $timeout, $state, CurrentUser) {
    var deferred = $q.defer();

    $timeout(function() {
      if (CurrentUser.profile.loggedIn) { // everything is fine, proceed
        deferred.resolve();
      } else {
        // user is not logged, do not proceed
        // instead, go to a different page
        $state.go('root.main');
        deferred.reject();
      }
    });
    return deferred.promise;
  }];

  var getAppName = ['AppNameService', function(AppNameService) {
    return AppNameService.getAppName().then(function(data) {
      return data.name;
    });
  }];

  var routes = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views: {
          'nav': {
            templateUrl: "../views/nav.html",
            controller: "LoginController"
          },
          'footer': {
            templateUrl: "../views/footer.html"
          }
        }
      })
      .state('root.main', {
        url: '/',
        views: {
          'container@': {
            templateUrl: "../views/main.html",
            controller: "MainController"
          }
        },
        resolve: {
          appName: getAppName
        }
      })
      .state('root.home', {
        url: '/home',
        views: {
          'container@': {
            templateUrl: "../views/home.html",
            controller: "HomeController"
          }
        },
        resolve: {
          '': authorized,
          user: ['CurrentUser', function(CurrentUser) {
            return CurrentUser.profile;
          }],
          secret: ['SecretService', function(SecretService) {
            return SecretService.getSecret();
          }]
        }
      });
  };

  angular
    .module('uiApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngTouch',
      'commons',
      'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', routes]);

}());
