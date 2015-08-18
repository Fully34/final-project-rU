var mongoose = require('mongoose');
var User = require('./userSchema.js');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/cam-store');

var admin = {

  username   : 'Cameron',
  password   : 'test',
  takeOrders : true
}

var newAdmin = new User(admin);

newAdmin.save(function(err, doc) {

  console.log('done');
})