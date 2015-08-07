
//============================== requirements ==============================//

var mongoose = require('mongoose');

 //============================== controller ==============================//
          
var adminController = {
  index: function(req, res) {
    res.render('index');
  }
};

module.exports = indexController;