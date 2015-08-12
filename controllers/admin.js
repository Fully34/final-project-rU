
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

    var item = new Item(req.body);

    item.save(function(err, doc) {

      if (err) {

        console.log(err);

        res.send(null);

      } else {
        
        res.send(doc);
      }
    });
  },

  update : function(req, res) {

    // console.log(req.body);

    var _id = req.body._id;

    // console.log(_id);

    //> update, but don't send anything back from the update method
    Item.update({_id : _id}, req.body, function(err, doc) {

      if (err) {

        // console.log(err);
        res.send('NOPE');
      }
    });

    //> sending the same object back so angular will get off your back about a response
    res.send(req.body);
  },

  remove : function(req, res) {

    var _id = req.params.id;
    // console.log(req.params);
    // console.log(_id)

    Item.remove({_id : _id}, function(err) {

      if (err) {

        res.send('NOPE ', err);
      } else {

        res.send(_id)
      }

    });
  }
};

module.exports = adminController;