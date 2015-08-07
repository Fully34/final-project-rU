
//===========================================================================//
                        /* ~~~ App Module ~~~ */ 
//===========================================================================//

var store = angular.module('store', ['ngResource', 'ngRoute']);

//============================== admin config ==============================//

store.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl : '/template/home',
      controller  : 'admin'
    });
});







