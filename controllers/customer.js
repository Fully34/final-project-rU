
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

  get : function(req, res) {

    Customer.find({}, function(err, doc) {

      if(err) {

        console.log("NOPE! Error: ", err);

        res.send(null);
        
      } else {

        res.send(doc);
      }
    });
  }, 

  create : function(req, res) {

    var customer = new Customer(req.body);

    customer.save(function(err, doc) {

      if (err) {

        console.log("NOPE! Error: ", err);

        res.send(null);
        
      } else {

        res.send(doc);
      }
    });
  }
};

module.exports = customerController;