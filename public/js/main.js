
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
      controller  : 'home'
    })
    .when('/queue', {
      templateUrl : '/templates/custqueue',
      controller  : 'queue'
    })
    .when('/portfolio', {
      templateUrl : '/templates/custportfolio',
      controller  : 'home'
    })
    .when('/shop', {
      templateUrl : '/templates/custshop',
      controller  : 'shop'
    })
    .when('/checkout', {
      templateUrl : '/templates/custcheckout',
      controller  : 'queue'
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
    .otherwise({
      redirectTo : '/'
    })
});

//============================== nav Controller ==============================//

store.controller('nav', function($scope, $http, $location, $rootScope) {

  $http.get('/api/me')
    .then(function(res) {

      // console.log(res);
       if(res.data) {

        $scope.navElements = {

          home      : '/#/admin',
          homeName  : 'Home',
          queue     : '/#/admin/queue',
          queueName : 'Queue',
          shopItems : '/#/admin/shop',
          shopIName : 'Shop Items',
          custShop  : '/#/shop',
          custSName : 'Customer Shop View',
          history   : '/#/admin/history', 
          histName  : 'History',
          logout    : '/logout',
          logoutName: 'Log Out'

        }

        // console.log($scope.navElements);

      } else {

        $scope.navElements = {

          home       : '/#/',
          homeName   : 'Home',
          about      : '/#/about',
          aboutName  : 'About',
          queue      : '/#/queue',
          queueName  : 'Queue',
          portfolio  : '/#/portfolio',
          portName   : 'Portfolio',
          shop       : '/#/shop',
          shopName   : 'Shop'
        }

        // console.log($scope.navElements);
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

  store.factory('customerFactory', function($resource) {

    var model = $resource( '/api/customer/:id', {id : '@_id'} );

    return {
      model     : model,
      customers : model.query()
    }
  });
//===========================================================================//
                        /* ~~~ customer facing controllers ~~~ */ 
//===========================================================================//

  
  //============================== home controller ==============================//
          
  store.controller('home', function($scope, $rootScope) {

    $scope.menu = function() {

    }

    console.log('HOME CONTROLLER');
  });

  //============================== shop controller ==============================//

  store.controller('shop', function($scope, itemFactory, $rootScope) {

    $scope.items = itemFactory.items;

    //> state variable for the showing and hiding of the form
    $scope.currentItemForm = null;

    //> Show/hide add to cart functionality
    $scope.showForm= function(itemName, item, quantity) {

      $scope.currentItemForm = itemName;

      //> if we pass an item and quantity into the showForm button, that means we hit the buy it now button
        //> else, we hit the lol jk button
      if (item && quantity && itemName !== null) {

        $scope.addToCart( item, quantity );

      } else {

        console.log($rootScope.currentCart);
        $rootScope.currentCart.pop();
        console.log($rootScope.currentCart);
      }
    };

    //> COME BACK AND DEAL WITH PAGE REFRESH
    $rootScope.currentTotal = $rootScope.currentTotal || 0;
    $rootScope.currentCart = $rootScope.currentCart || [];

    //> create cart button and cart in memory
    $scope.addToCart = function(item, quantity) {


      //> find the item in the cart?
      var currentCart = $rootScope.currentCart;

      //> Check the cart by item _id
      var contained = $scope.beenOrdered( item ); //> returns -1/index#

      // > if the array doesn't have the item, push it to the array
        //> this will be on the buy it now click
      if (contained === -1) {

        //> store the item and quantity so we can display a cart later
        $rootScope.currentCart.push({

          item       : item, 
          quantity   : quantity,
        });

      //> this will be on the add to cart click
      } else {

        //> update quantity of item in cart
        for (var i = 0; i < $rootScope.currentCart.length; i++) {

          if (item._id === currentCart[i].item._id ){

            currentCart[i].quantity = quantity;
          }
        };

      //> price logic for multiple items for cart button
      $scope.total = parseInt(quantity, 10) * item.price

      //> price logic for running total
      $rootScope.currentTotal += $scope.total;
      };



    };//> end addToCart()

    //> remove the add to cart button when they add something to the cart
    $scope.showme = true;

    // console.log($scope.showme)

    //> Check if something has been ordered //> returns t/f for ng-if
    $scope.beenOrdered = function( item ) {

      return $rootScope.currentCart.map(function(e) {

        return e.item._id;

      }).indexOf(item._id);
    };
  });


//===========================================================================//
                        /* ~~~ customer checkout ~~~ */ 
//===========================================================================//

  //============================== queue controller ==============================//

  store.controller('queue', function($scope, $rootScope, $http, $location, customerFactory) {

    console.log('QUEUE CONTROLLER');

    //> customer array from db
    $scope.customers = customerFactory.customers;

    //> add customer to db
    $scope.addCustomer = function(  ) {

      //> model the customer based on the form data
      var newCustomer = new customerFactory.model(this.newCustomer);

      //> add the order array to the customer
      newCustomer.order = $rootScope.currentCart;

      //> Save the customer to the backend
      newCustomer.$save(function(returned) {

        //> keep front end customer array up to date with any updates
        if (returned.order) {

          console.log('good order');
          $scope.customers.push(returned);

          //> reset my cart and total on good order
          $rootScope.currentCart = [];

          $rootScope.currentTotal = 0;
        };
      });

      //> reset form fields      
      this.newCustomer = {};


      //> redirect to queue immediately
      $location.url('/queue');
    }
//============================== checkout controls ==============================//
        
    //> remove item from cart at checkout screen
    $scope.removeItem = function( item ) {

      var cart = $rootScope.currentCart;

      for (var i = 0; i < cart.length; i++) {

        // console.log(cart);
        // console.log(item);

        if (item._id === cart[i].item._id) {

          // console.log(cart)

          //> need to decrement the total as well:
            //> needs to happen before we splice out of the cart
          $rootScope.currentTotal -= (item.price * cart[i].quantity);

          //> Splice the item out of the cart
          cart.splice(i, 1);

          break;
        }
      }
    };

    $scope.showCheckoutForm = false;

    $scope.logCart = function() {

      console.log($scope.currentCart)
    }
  });

    //============================== ADMIN queue ==============================//

  store.controller('adminQueue', function($scope, $rootScope, $http, $location, customerFactory) {

    console.log('admin queue');

    $http.get('/api/me')
      .then(function(res) {

        // console.log(res.data);

        if(!res.data) { 

          $location.url('/admin/login')
        };
      });

    $scope.customers = customerFactory.customers;

    $scope.inProg = function(customer) {

      customer.inProgress = true;

      //> send request to backend to update the db customer
      customer.$save();
    };

    $scope.completed = function(customer) {

      customer.complete = true;

      //> send request to backend to update the db customer
      customer.$save();
    };

    $scope.shipped = function(customer) {

      var time = moment().format('MMM, DD, YYYY');
      console.log(time);
      customer.shipped = true;
      customer.dateShipped = time;

      var relative = moment([2015, 6, 30])
      var now = moment()
      var timeDiff = now.diff(relative);

      customer.timeFrom = timeDiff;
      console.log(timeDiff);

      //> send request to backend to update the db customer
      customer.$save();
  };
});
          
            
//===========================================================================//
                        /* ~~~ admin facing controllers ~~~ */ 
//===========================================================================//

//============================== home ==============================//
        
store.controller('adminHome', function($scope, $http, $location, $rootScope) {

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

        // console.log(res.data);

        if(!res.data) { 

          $location.url('/admin/login')
        };
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
    };

    // > if the checkbox is false, the item is not present in the customer store
    // > if the checkbox is true, the item is present in the customer store
    $scope.toggleStore = function(item, forSale) {

      // console.log(item);

      // item.forSale = forSale;

      item.$save( function(returned) {

        console.log('RETURNED ' , returned);

      });
    };

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

      $scope.adminLoggedIn = false;

      //> WANT TO GET THIS WORKING AT SOME PONT
      // $scope.customerElements = [

      //   {
      //     name: 'Home',
      //     route: '/#/'
      //   },
      //   {
      //     name: 'About',
      //     route: '/#/about'
      //   },
      //   {
      //     name: 'Queue',
      //     route: '/#/queue'
      //   },
      //   {
      //     name: 'Portfolio',
      //     route: '/#/portfolio'
      //   },
      //   {
      //     name: 'Shop',
      //     route: '/#/shop'
      //   }
      // ];

      // $scope.adminElements = [

      //   {
      //     name: 'Home',
      //     route: '/#/admin'
      //   },
      //   {
      //     name: 'Queue',
      //     route: '/#/admin/queue'
      //   },
      //   {
      //     name: 'Shop Items',
      //     route: '/#/admin/shop'
      //   },
      //   {
      //     name: 'Customer Shop View',
      //     route: '/#/shop'
      //   },
      //   {
      //     name: 'History',
      //     route: '/#/admin/history'
      //   }
      // ];

      $scope.login = function() {

        $http.post('/login', $scope.admin)
          .then( function(res) {

            if(!res.data.err) {

              $location.url('/admin');

              $scope.adminLoggedIn = true;

              console.log($scope.adminLoggedIn);

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

        $location.url('/admin/login');
      }
    }); 

  console.log('HISTORY CONTROLLER');
});

















