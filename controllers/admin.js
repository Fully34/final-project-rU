
//============================== requirements ==============================//

var mongoose = require('mongoose');
var Customer = require('../models/customerModel.js');
var Item     = require('../models/itemModel.js');

 //============================== controller ==============================//
          
var adminController = {
  index: function(req, res) {
    res.render('layout');
  }
};

module.exports = adminController;