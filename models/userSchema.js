
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
  },
  takeOrders : {
    type     : Boolean,
    required : true
  }
});

/**
 * This allows us to hook into the pre-save DB flow. Our
 * callback will be called whenever a new user is about to
 * be saved to the database so that we can encrypt the password.
 */
userSchema.pre('save', function(next){

  // First, check to see if the password has been modified. If not, just move on.
  if(!this.isModified('password')) return next();

  // Store access to "this", which represents the current user document
  var user = this; //> stor the value of this to user so we can access it down the chain
    //> we are looking at different scopes, but still want to use 'this' from here

  // Generate an encryption "salt." This is a special way of increasing the
  // encryption power by wrapping the given string in a secret string. Something
  // like "secretpasswordsecret" and then encrypting that result.
  bcrypt.genSalt(15, function(err, salt){

    // If there was an error, allow execution to move to the next middleware
    if(err) return next(err);

    // If we are successful, use the salt to run the encryption on the given password
    bcrypt.hash(user.password, salt, function(err, hash){

      // If there was an error, allow execution to move to the next middleware
      if(err) return next(err);

      // If the encryption succeeded, then replace the un-encrypted password
      // in the given document with the newly encrypted one.
      user.password = hash;

      // Allow execution to move to the next middleware
      return next();
    });
  });
});


/**
 * Method on the user schema that allows us to hook into the
 * bcrypt system to compare an encrypted password to a given
 * password. This process doesn't involve unencrypting the stored
 * password, but rather encrypts the given one in the same way and
 * compares those values
 */
userSchema.methods.comparePassword = function(candidatePassword, next){
  // Use bcrypt to compare the unencrypted value to the encrypted one in the DB
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    // If there was an error, allow execution to move to the next middleware
    if(err) return next(err);

    // If there is no error, move to the next middleware and inform
    // it of the match status (true or false)
    return next(null, isMatch);
  });
};

// Our user model
var User = mongoose.model('user', userSchema);

// Make user model available through exports/require
module.exports = User;










