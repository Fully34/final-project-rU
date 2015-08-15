
//============================== requirements ==============================//

var mongoose = require('mongoose'); 

//============================== schema ==============================//

var Customer = mongoose.model('Customer', {

  // THESE WILL HAVE MONGOOSE ID'S, USE THOSE FOR TRACKING PURPOSES IN THE QUEUE
  name        : {type : String},
  product_id  : {type : String},
  orderNum    : {type : String},
  billAddress : {
    street1 : {type : String},
    street2 : {type : String},
    city    : {type : String},
    state   : {type : String},
    zip     : {type : Number}
  },
  shipAddress : {
    street1 : {type : String},
    street2 : {type : String},
    city    : {type : String},
    state   : {type : String},
    zip     : {type : Number}
  },
  phoneNumber : {type : String},
  email       : {type : String},
  paid        : {type : Boolean},
  inProgress  : {type : Boolean},
  complete    : {type : Boolean},
  shipped     : {type : Boolean}
});

module.exports = Customer;