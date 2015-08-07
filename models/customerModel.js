
//============================== requirements ==============================//

var mongoose = require('mongoose'); 

//============================== schema ==============================//

var Customer = mongoose.model('Customer', {

  // THESE WILL HAVE MONGOOSE ID'S, USE THOSE FOR TRACKING PURPOSES IN THE QUEUE
  name        : {type : String},
  product_id  : {type : String},
  orderNum    : {type : String},
  address     : {type : String},
  phoneNumber : {type : String},
  paid        : {type : Boolean},
  inProgress  : {type : Boolean},
  complete    : {type : Boolean},
  shipped     : {type : Boolean}
});

module.exports = Customer;