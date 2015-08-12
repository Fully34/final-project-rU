
//============================== requirements ==============================//

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');


//============================== user schema ==============================//

var userSchema = mongoose.Schema({

  username : {
    type     : String,
    required : true,
    unique   : true
  },
  password : {
    type     : String,
    required : true
  }  
});












