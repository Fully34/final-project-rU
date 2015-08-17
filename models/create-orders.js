var mongoose = require('mongoose');
var Customer = require('./customerModel.js');

mongoose.connect('mongodb://localhost/cam-store');

  var mockCustomer = {

  name        : 'Chris',
  order       : [
  {
    name        : 'Wine Rack',
    image       : 'http://www.placehold.it/300',
    description : 'This is an awesome wine rack!',
    price       : 40000,
    type        : 'Rack',
    forSale     : true
  }, 
  {
    name        : 'Swee Art',
    image       : 'http://www.placehold.it/300',
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

for (var i = 0; i < 15; i ++ ) {

  mockCustomer.name = "Chris"

  mockCustomer.name = "Chris" + ' | ' + i;

  var newMockCustomer = new Customer(mockCustomer);

  newMockCustomer.save(function(err, doc) {

    console.log(doc);
    console.log('done');
  });
};














