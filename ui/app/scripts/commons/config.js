(function(module) {
  'use strict';
  module.config(function($provide){
    $provide.decorator('$exceptionHandler', ['$delegate', function($delegate){
      return function(exception, cause) {
        $delegate(exception, cause);
        alert(exception.message);
      };
    }]);
  });
}(angular.module('commons')));
