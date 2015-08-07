
//===========================================================================//
                        /* ~~~ App Module ~~~ */ 
//===========================================================================//

var store = angular.module('store', ['ngResource', 'ngRoute']);

//============================== admin ==============================//

store.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl : '/template/home',
      controller  : 'home'
    })
    .when('/admin', {
      templateUrl : '/template/adminHome',
      controller  : 'adminHome'
    })
});

//===========================================================================//
                        /* ~~~ customer facing controllers ~~~ */ 
//===========================================================================//

store.controller('home', function($scope) {

  console.log('HOME CONTROLLER');
});

//===========================================================================//
                        /* ~~~ admin facing controllers ~~~ */ 
//===========================================================================//

store.controller('adminHome', function($scope) {

  console.log('I AM THE ADMIN CONTROLLER');
});




