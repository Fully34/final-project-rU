
//============================== requirements ==============================//

var mongoose = require('mongoose');
var Customer = require('../models/customerModel.js');
var Item     = require('../models/itemModel.js');
var stripe = require('stripe');

 //============================== controller ==============================//
          
var customerController = {
	index: function(req, res) {
		res.render('layout');
	},

  // getShop : function(req, res) {

  //   Item.find({}, function(err, doc) {

  //     if (err) {

  //       res.send("ERROR", err);

  //     } else {

  //       res.send(doc);
  //     }
  //   })
  // }
};

module.exports = customerController;