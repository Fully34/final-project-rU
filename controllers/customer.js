
//============================== requirements ==============================//

var mongoose = require('mongoose');
var Customer = require('../models/customerModel.js');
var Item     = require('../models/itemModel.js');
var stripe = require('stripe');

 //============================== controller ==============================//
          
var customerController = {
	index: function(req, res) {
		res.render('layout');
	}
};

module.exports = customerController;