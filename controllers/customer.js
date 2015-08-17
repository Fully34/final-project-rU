
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

    if(!req.body.order) {

      res.send("ERROR, You don't have an order!");
    }

    var customer = new Customer(req.body);

    console.log('CUSTOMER', customer);

    customer.save(function(err, doc) {

      if (err) {

        console.log("ERROR");
        // console.log("NOPE! Error: ", err);

        res.send(null);
        
      } else {

        res.send(doc);
      }
    });
  }
};

module.exports = customerController;