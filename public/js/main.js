
//===========================================================================//
                        /* ~~~ App Module ~~~ */ 
//===========================================================================//

var store = angular.module('store', ['ngResource', 'ngRoute']);

//============================== routing ==============================//

store.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl : '/templates/custhome',
      controller  : 'home'
    })
    .when('/about', {
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
      templateUrl : '/templates/adminhistory',
      controller  : 'adminHistory'
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


//============================== home ==============================//
        
store.controller('adminHome', function($scope) {

  console.log('I AM THE ADMIN CONTROLLER');
});

//===========================================================================//
                        /* ~~~ admin shop view ~~~ */ 
//===========================================================================//

  //============================== Item Factory ==============================//
          
  store.factory('itemFactory', function($resource) {

    var model = $resource('/admin/addItem/:id', {id : '@_id'} );

      return {
        model   : model,
        items   : model.query()
      }
  });

  //============================== shopController ==============================//
          
  store.controller('adminShop', function($scope, itemFactory) {

    console.log("Here's your shop! | " + itemFactory.model);

    $scope.showForm = false;

    $scope.toggleForm = function() {

      $scope.showForm = !$scope.showForm
    }

    $scope.addItem = function() {

      var newItem = new itemFactory.model(this.newItem);

      newItem.forSale = false;

      newItem.$save( function(returned) {

        itemFactory.items.push(returned);
      });

      this.newItem = {};
    }
  });
    
    //============================== addItem Controller ==============================//
    





















