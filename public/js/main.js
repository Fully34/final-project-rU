
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
    .when('/checkout', {
      templateUrl : '/templates/custcheckout',
      controller  : 'checkout'
    })
    .when('/admin/login', {
      templateUrl : '/templates/login',
      controller  : 'login'
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

//============================== nav Controller ==============================//

store.controller('nav', function($scope, $http, $location, $rootScope) {

  console.log('nav Controller'); 

  $rootScope.$watch($rootScope.adminLoggedIn, function() {

    console.log('Changed');

    if ($rootScope.adminLoggedIn) {

      console.log(' ROOT SCOPE!!! | ', $rootScope.adminLoggedIn);

      $scope.admin = $rootScope.adminLoggedIn;

      $scope.adminElements = [

        {
          route : '/#/admin',
          name  : 'Home'
        },
        {
          route : '/#/admin/queue',
          name  : 'Queue'
        },
        {
          route : '/#/admin',
          name  : 'Home'
        },
        {
          route : '/#/admin/shop',
          name  : 'Shop Items'
        },
        {
          route : '/#/shop',
          name  : 'Customer Shop',
        },
        {
          route : '/#/admin/history', 
          name  : 'History'
        },
        {
          route : '/logout',
          name  : 'Logout'
        }
      ] 

      console.log($scope.adminElements);
      
    } else {

      $scope.custElements = [

        {
          route : '/#/',
          name  : 'Home'
        },
        {
          route : '/#/about',
          name  : 'About'
        },
        {
          route : '/#/queue',
          name  : 'Queue'
        },
        {
          route : '/#/portfolio',
          name  : 'Portfolio',
        },{
          route : '/#/shop',
          name  : 'Shop'
        },
      ]

      console.log('CURRENT NAV ELEMENTS | ', $scope.custElements);  
    
    }
  });
});

  //============================== Item Factory ==============================//
          
  //> accessible from both shop controllers
  store.factory('itemFactory', function($resource) {

    var model = $resource('/api/items/:id', {id : '@_id'} );
    //> The id is optional, will only get tacked on if the object in question has an _id prop

      return {
        model   : model,
        items   : model.query()
      }
  });

//===========================================================================//
                        /* ~~~ customer facing controllers ~~~ */ 
//===========================================================================//

  
  //============================== home controller ==============================//
          
  store.controller('home', function($scope) {

    $scope.menu = function() {

    }

    console.log('HOME CONTROLLER');
  });

  //============================== shop controller ==============================//

  store.controller('shop', function($scope, itemFactory) {

    $scope.items = itemFactory.items;

    var addToCart = function(item) {

      //> Come back and do this after research
    }
  });

  //============================== about controller ==============================//

  store.controller('about', function($scope) {

    console.log('ABOUT CONTROLLER');
  });
  //============================== portfolio controller ==============================//

  store.controller('portfolio', function($scope) {

    console.log('PORTFOLIO CONTROLLER');
  });

  //============================== queue controller ==============================//

  store.controller('queue', function($scope) {

    console.log('QUEUE CONTROLLER');
  });
          
          
            
//===========================================================================//
                        /* ~~~ admin facing controllers ~~~ */ 
//===========================================================================//

//============================== home ==============================//
        
store.controller('adminHome', function($scope, $http, $location) {

  $http.get('/api/me')
    .then(function(res) {

      // console.log(res.data);

      if(!res.data) { 

        $location.url('/admin/login')
      }
    }); 
  // console.log('I AM THE ADMIN CONTROLLER');
});

//===========================================================================//
                        /* ~~~ admin shop view ~~~ */ 
//===========================================================================//


  //============================== admin shopController ==============================//
          
  store.controller('adminShop', function($scope, itemFactory, $timeout, $http, $location) {

    console.log("SHOP CONTROLLER");

    $http.get('/api/me')
      .then(function(res) {

        console.log(res.data);
        if(!res.data) { 

          $location.url('/admin/login')
        }
      }); 

    //> toggle the addItem form
    $scope.toggleForm = function() {

      $scope.showForm = !$scope.showForm
    };

    //> access the item array from the itemFactory
    $scope.items = itemFactory.items

    //> add item functionality -> Sends post request
    $scope.addItem = function() {

      var newItem = new itemFactory.model(this.newItem);

      // newItem.forSale = false;

      newItem.$save( function(returned) {

        console.log('BEFORE : ', itemFactory);
        //> want the item array to be equal to the database array at all times
        itemFactory.items.push(returned);

        console.log('AFTER : ', itemFactory);
      });

      this.newItem = {};
    }

    // > if the checkbox is false, the item is not present in the customer store
    // > if the checkbox is true, the item is present in the customer store
    $scope.toggleStore = function(item, forSale) {

      console.log(item);

      // item.forSale = forSale;

      item.$save( function(returned) {

        console.log('RETURNED ' , returned);

      });
    }

    //> send DELETE req to backend --> (handled by app.delete('/api/items/:id'))
    $scope.deleteItem = function(item, index) {

      console.log($scope.items);

      item.$delete(function(returned) {

        // console.log(returned);
      });

      $scope.items.splice(index, 1);
    }
  });
    
    //============================== login Controller ==============================//
    

    store.controller('login', function($scope, $http, $location, $rootScope) {

      $rootScope.adminLoggedIn = null;

      $scope.login = function() {
        
        $http.post('/login', $scope.admin)
          .then( function(res) {

            if(!res.data.err) {

              $location.url('/admin');

              $rootScope.adminLoggedIn = true;

              console.log($rootScope.adminLoggedIn);

            } else {

              $scope.err = res.data.err;
            }
          })
      };
    });

            
//============================== admin history controller ==============================//

store.controller('adminHistory', function($scope, $http, $location) {

  $http.get('/api/me')
    .then(function(res) {

      console.log(res.data);
      if(!res.data) { 

        $location.url('/admin/login')
      }
    }); 

  console.log('HISTORY CONTROLLER');
});

//============================== admin queue controller ==============================//

store.controller('adminQueue', function($scope, $http, $location) {

  $http.get('/api/me')
    .then(function(res) {

      console.log(res.data);
      if(!res.data) { 

        $location.url('/admin/login')
      }
    }); 

  console.log('QUEUE CONTROLLER');
});

















