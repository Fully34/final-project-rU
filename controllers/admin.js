
//============================== requirements ==============================//

var mongoose = require('mongoose');
var Customer = require('../models/customerModel.js');
var Item     = require('../models/itemModel.js');

 //============================== controller ==============================//
          
var adminController = {
  index: function(req, res) {
    res.render('layout');
  },

  get : function(req, res) {

    Item.find({}, function(err, doc) {

      res.send(doc);
    });
  },

  create : function(req, res) {

    console.log('THIS IS THE BODY ' + req.body);

    var item = new Item(req.body);

    console.log('THIS IS THE ITEM : ' + item);

    item.save(function(err, doc) {
      if (err) {

        console.log(err)
        
      } else {
        
        res.send(doc);
      }
    });
  }
};

module.exports = adminController;