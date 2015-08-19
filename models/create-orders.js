var mongoose = require('mongoose');
var Customer = require('./customerModel.js');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/cam-store');

  var mockCustomer1 = {

  firstName   : 'Chris',
  lastName    : 'Fullinwider',
  order       : [
  {
    name        : 'Wine Rack',
    image       : 'https://www.placehold.it/300',
    description : 'This is an awesome wine rack!',
    price       : 40000,
    type        : 'Rack',
    forSale     : true
  }, 
  {
    name        : 'Swee Art',
    image       : 'https://www.placehold.it/300',
    description : 'This is some sweet horse shoe art!',
    price       : 60000,
    type        : 'Art',
    forSale     : true
  }
],
  billAddress : {
    street1 : 'Awesome St',
    street2 : undefined,
    city    : 'AwesomeVille',
    state   : 'Co',
    zip     : 80401
  },
  shipAddress : {
    street1 : undefined,
    street2 : undefined,
    city    : undefined,
    state   : undefined,
    zip     : undefined,
  },
  phone       : 3033494526,
  email       : 'Hello@hello.com',
  paid        : true,
  inProgress  : false,
  complete    : false,
  shipped     : false,
  dateShipped : false,
  timeFrom    : 0,
  refunded    : false,
}

var newMockCustomer1 = new Customer(mockCustomer1);

  newMockCustomer1.save(function(err, doc) {

    console.log(doc);
    console.log('done');
  });

  var mockCustomer2 = {

  firstName   : 'Ken',
  lastName    : 'Sayers',
  order       : [
  {
    name        : 'Wine Rack',
    image       : 'https://www.placehold.it/300',
    description : 'This is an awesome wine rack!',
    price       : 40000,
    type        : 'Rack',
    forSale     : true
  }, 
  {
    name        : 'Swee Art',
    image       : 'https://www.placehold.it/300',
    description : 'This is some sweet horse shoe art!',
    price       : 60000,
    type        : 'Art',
    forSale     : true
  }
],
  billAddress : {
    street1 : 'Awesome St',
    street2 : undefined,
    city    : 'AwesomeVille',
    state   : 'Co',
    zip     : 80401
  },
  shipAddress : {
    street1 : undefined,
    street2 : undefined,
    city    : undefined,
    state   : undefined,
    zip     : undefined,
  },
  phone       : 3033494526,
  email       : 'Hello@hello.com',
  paid        : true,
  inProgress  : false,
  complete    : false,
  shipped     : false,
  dateShipped : false,
  timeFrom    : 0,
  refunded    : false,
}

var newMockCustomer2 = new Customer(mockCustomer2);

  newMockCustomer2.save(function(err, doc) {

    console.log(doc);
    console.log('done');
  });

    var mockCustomer3 = {

  firstName   : 'Sarah',
  lastName    : 'Fallon',
  order       : [
  {
    name        : 'Wine Rack',
    image       : 'https://www.placehold.it/300',
    description : 'This is an awesome wine rack!',
    price       : 40000,
    type        : 'Rack',
    forSale     : true
  }, 
  {
    name        : 'Swee Art',
    image       : 'https://www.placehold.it/300',
    description : 'This is some sweet horse shoe art!',
    price       : 60000,
    type        : 'Art',
    forSale     : true
  }
],
  billAddress : {
    street1 : 'Awesome St',
    street2 : undefined,
    city    : 'AwesomeVille',
    state   : 'Co',
    zip     : 80401
  },
  shipAddress : {
    street1 : undefined,
    street2 : undefined,
    city    : undefined,
    state   : undefined,
    zip     : undefined,
  },
  phone       : 3033494526,
  email       : 'Hello@hello.com',
  paid        : true,
  inProgress  : false,
  complete    : false,
  shipped     : false,
  dateShipped : false,
  timeFrom    : 0,
  refunded    : false,
}

var newMockCustomer3 = new Customer(mockCustomer3);

  newMockCustomer3.save(function(err, doc) {

    console.log(doc);
    console.log('done');
  });

    var mockCustomer4 = {

  firstName   : 'Andrew',
  lastName    : 'Miller',
  order       : [
  {
    name        : 'Wine Rack',
    image       : 'https://www.placehold.it/300',
    description : 'This is an awesome wine rack!',
    price       : 40000,
    type        : 'Rack',
    forSale     : true
  }, 
  {
    name        : 'Swee Art',
    image       : 'https://www.placehold.it/300',
    description : 'This is some sweet horse shoe art!',
    price       : 60000,
    type        : 'Art',
    forSale     : true
  }
],
  billAddress : {
    street1 : 'Awesome St',
    street2 : undefined,
    city    : 'AwesomeVille',
    state   : 'Co',
    zip     : 80401
  },
  shipAddress : {
    street1 : undefined,
    street2 : undefined,
    city    : undefined,
    state   : undefined,
    zip     : undefined,
  },
  phone       : 3033494526,
  email       : 'Hello@hello.com',
  paid        : true,
  inProgress  : false,
  complete    : false,
  shipped     : false,
  dateShipped : false,
  timeFrom    : 0,
  refunded    : false,
}

var newMockCustomer4 = new Customer(mockCustomer4);

  newMockCustomer4.save(function(err, doc) {

    console.log(doc);
    console.log('done');
  });

    var mockCustomer5 = {

  firstName   : 'Ron',
  lastName    : 'Granger',
  order       : [
  {
    name        : 'Wine Rack',
    image       : 'https://www.placehold.it/300',
    description : 'This is an awesome wine rack!',
    price       : 40000,
    type        : 'Rack',
    forSale     : true
  }, 
  {
    name        : 'Swee Art',
    image       : 'https://www.placehold.it/300',
    description : 'This is some sweet horse shoe art!',
    price       : 60000,
    type        : 'Art',
    forSale     : true
  }
],
  billAddress : {
    street1 : 'Awesome St',
    street2 : undefined,
    city    : 'AwesomeVille',
    state   : 'Co',
    zip     : 80401
  },
  shipAddress : {
    street1 : undefined,
    street2 : undefined,
    city    : undefined,
    state   : undefined,
    zip     : undefined,
  },
  phone       : 3033494526,
  email       : 'Hello@hello.com',
  paid        : true,
  inProgress  : false,
  complete    : false,
  shipped     : false,
  dateShipped : false,
  timeFrom    : 0,
  refunded    : false,
}

var newMockCustomer5 = new Customer(mockCustomer5);

  newMockCustomer5.save(function(err, doc) {

    console.log(doc);
    console.log('done');
  });

    var mockCustomer6 = {

  firstName   : 'Katie',
  lastName    : 'Elliot',
  order       : [
  {
    name        : 'Wine Rack',
    image       : 'https://www.placehold.it/300',
    description : 'This is an awesome wine rack!',
    price       : 40000,
    type        : 'Rack',
    forSale     : true
  }, 
  {
    name        : 'Swee Art',
    image       : 'https://www.placehold.it/300',
    description : 'This is some sweet horse shoe art!',
    price       : 60000,
    type        : 'Art',
    forSale     : true
  }
],
  billAddress : {
    street1 : 'Awesome St',
    street2 : undefined,
    city    : 'AwesomeVille',
    state   : 'Co',
    zip     : 80401
  },
  shipAddress : {
    street1 : undefined,
    street2 : undefined,
    city    : undefined,
    state   : undefined,
    zip     : undefined,
  },
  phone       : 3033494526,
  email       : 'Hello@hello.com',
  paid        : true,
  inProgress  : false,
  complete    : false,
  shipped     : false,
  dateShipped : false,
  timeFrom    : 0,
  refunded    : false,
}

var newMockCustomer6 = new Customer(mockCustomer6);

  newMockCustomer6.save(function(err, doc) {

    console.log(doc);
    console.log('done');
  });

    var mockCustomer7 = {

  firstName   : 'Steve',
  lastName    : 'DeFelipo',
  order       : [
  {
    name        : 'Wine Rack',
    image       : 'https://www.placehold.it/300',
    description : 'This is an awesome wine rack!',
    price       : 40000,
    type        : 'Rack',
    forSale     : true
  }, 
  {
    name        : 'Swee Art',
    image       : 'https://www.placehold.it/300',
    description : 'This is some sweet horse shoe art!',
    price       : 60000,
    type        : 'Art',
    forSale     : true
  }
],
  billAddress : {
    street1 : 'Awesome St',
    street2 : undefined,
    city    : 'AwesomeVille',
    state   : 'Co',
    zip     : 80401
  },
  shipAddress : {
    street1 : undefined,
    street2 : undefined,
    city    : undefined,
    state   : undefined,
    zip     : undefined,
  },
  phone       : 3033494526,
  email       : 'Hello@hello.com',
  paid        : true,
  inProgress  : false,
  complete    : false,
  shipped     : false,
  dateShipped : false,
  timeFrom    : 0,
  refunded    : false,
}

var newMockCustomer7 = new Customer(mockCustomer7);

  newMockCustomer7.save(function(err, doc) {

    console.log(doc);
    console.log('done');
  });

//   var mockCustomerRepeat = {

//   name        : 'Chris',
//   order       : [
//   {
//     name        : 'Wine Rack',
//     image       : 'https://www.placehold.it/300',
//     description : 'This is an awesome wine rack!',
//     price       : 40000,
//     type        : 'Rack',
//     forSale     : true
//   }, 
//   {
//     name        : 'Swee Art',
//     image       : 'https://www.placehold.it/300',
//     description : 'This is some sweet horse shoe art!',
//     price       : 60000,
//     type        : 'Art',
//     forSale     : true
//   }
// ],
//   billAddress : {
//     street1 : 'Awesome St',
//     street2 : undefined,
//     city    : 'AwesomeVille',
//     state   : 'Co',
//     zip     : 80401
//   },
//   shipAddress : {
//     street1 : undefined,
//     street2 : undefined,
//     city    : undefined,
//     state   : undefined,
//     zip     : undefined,
//   },
//   phone       : 3033494526,
//   email       : 'Hello@hello.com',
//   paid        : true,
//   inProgress  : false,
//   complete    : false,
//   shipped     : false,
//   dateShipped : false,
//   timeFrom    : 0,
//   refunded    : false,
// }

// for (var i = 0; i < 15; i ++ ) {

//   mockCustomerRepeat.name = "Chris"

//   mockCustomerRepeat.name = "Chris" + ' | ' + i;

//   var newMockCustomerRepeat = new Customer(mockCustomerRepeat);

//   newMockCustomerRepeat.save(function(err, doc) {

//     console.log(doc);
//     console.log('done');
//   });
// };