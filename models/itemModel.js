
//============================== requirements ==============================//

var mongoose = require('mongoose'); 

//============================== schema ==============================//

var itemSchema = mongoose.Schema({

  //> THESE WILL HAVE _id FROM MONGOOSE --> Not sure if useful, but keep in mind
  name        : {type : String},
  // image       : {type : String},
  description : {type : String},
  price       : {type : Number},
  type        : {type : String, validate : /(Art|Rack)/},
  forSale     : {type : Boolean, default : false}
});

//============================== model ==============================//
var Item = mongoose.model('Item', itemSchema);

module.exports = Item;