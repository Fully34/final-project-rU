
//============================== requirements ==============================//

var mongoose = require('mongoose'); 


//============================== schema ==============================//

var Item = mongoose.model('Item', {

  //> THESE WILL HAVE _id FROM MONGOOSE --> Not sure if useful, but keep in mind
  product_id  : {type : String},
  name        : {type : String},
  image       : {type : String},
  description : {type : String},
  price       : {type : Number},
  type        : {type : String, validate : /(art|rack)/}
});

module.exports = Item;