
//============================== requirements ==============================//

var mongoose = require('mongoose'); 

//============================== schema ==============================//

var Customer = mongoose.model('Customer', {

  // THESE WILL HAVE MONGOOSE ID'S, USE THOSE FOR TRACKING PURPOSES IN THE QUEUE
  firstName     : {type : String, required : true},
  lastName      : {type: String, required  : true},
  order         : {type: Array, required : true},
  billAddress   : {
    street1 : {type : String, required : true},
    street2 : {type : String},
    city    : {type : String, required : true},
    state   : {type : String, required : true},
    zip     : {type : Number, required : true}
  },
  shipAddress   : {
    street1 : {type : String},
    street2 : {type : String},
    city    : {type : String},
    state   : {type : String},
    zip     : {type : Number}
  },
  phone         : {type : Number, required : true},
  email         : {type : String, required : true},
  paid          : {type : Boolean, default : false, required : true},
  // timeFromPaid  : {type : Number},
  inProgress    : {type : Boolean, default : false},
  complete      : {type : Boolean, default : false},
  shipped       : {type : Boolean, default : false},
  dateShipped   : {type : String, default : null},
  timeFrom      : {type: Number, default : 0},
  refunded      : {type : Boolean, default : false}
});

module.exports = Customer;