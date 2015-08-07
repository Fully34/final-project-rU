
//============================== requirements ==============================//

var mongoose = require('mongoose');
var Customer = require('../models/customerModel.js');
var Item     = require('../models/itemModel.js');

 //============================== controller ==============================//
          
var customerController = {
	index: function(req, res) {
		res.render('index');
	}
};

module.exports = customerController;