
//===========================================================================//
                        /* ~~~ App Module ~~~ */ 
//===========================================================================//

var store = angular.module('store', ['ngResource', 'ngRoute']);

//============================== admin ==============================//

store.config(function($routeProvider) {

  $routeProvider

  //============================== customer routing ==============================//
          
    .when('/', {
      templateUrl : '/templates/custhome',
      controller  : 'home'
    }).
    when('/about', {
      templateUrl : '/templates/custabout',
      controller  : 'about'
    })
    .when('/queue', {
      templateUrl : '/templates/custqueue',
      controller  : 'queue'
    })
    .when('/portfolio', {
      templateUrl : '/templates/custportfolio',
      controller  : 'portfolio'
    })
    .when('/shop', {
      templateUrl : '/templates/custshop',
      controller  : 'shop'
    })

    //============================== admin routing ==============================//
            
    .when('/admin', {
      templateUrl : '/templates/adminhome',
      controller  : 'adminHome'
    })
    .when('/admin/queue', {
      templateUrl : '/templates/adminqueue',
      controller  : 'adminQueue'
    })
    .when('/admin/shop', {
      templateUrl : '/templates/adminshop',
      controller  : 'adminShop'
    })
    .when('/admin/history', {
      templateUrl : '/templates/adminhistory'
    })
});

//===========================================================================//
                        /* ~~~ customer facing controllers ~~~ */ 
//===========================================================================//

store.controller('home', function($scope) {

  $scope.menu = function() {


  }
  console.log('HOME CONTROLLER');
});

//===========================================================================//
                        /* ~~~ admin facing controllers ~~~ */ 
//===========================================================================//

store.controller('adminHome', function($scope) {

  console.log('I AM THE ADMIN CONTROLLER');
});




