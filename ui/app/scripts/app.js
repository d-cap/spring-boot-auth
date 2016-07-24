(function() {
  'use strict';
  angular
    .module('uiApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'commons'
    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

}());
