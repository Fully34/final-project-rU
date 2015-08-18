
//============================== requirements ==============================//

var mongoose = require('mongoose');
var Customer = require('../models/customerModel.js');
var Item     = require('../models/itemModel.js');
var Admin    = require('../models/userSchema.js')
var moment   = require('moment');

 //============================== controller ==============================//
          
var adminController = {

  index: function(req, res) {
    
    res.render('layout');
  },

  get : function(req, res) {

    Item.find({}, function(err, doc) {

      if (err) {

        console.log("NOPE! Error: ", err);

        res.send(err);

      } else {

        res.send(doc);
      };
    });
  },

  create : function(req, res) {

    var item = new Item(req.body);

    item.save(function(err, doc) {

      if (err) {

        console.log("ERROR");

        res.send(err);

      } else {
        
        res.send(doc);
      }
    });
  },

  updateItem : function(req, res) {

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

        console.log("NOPE!")
        res.send(err);

      } else {

        res.send(_id);
      }
    });
  },

  updateCustomer : function(req, res) {

    var _id = req.params.id;

    // console.log('BODY -------------------------', req.body)
    Customer.update({_id : _id}, req.body, function(err, doc) {

      if (err) {

        console.log("NOPE! Error Message: ", err)
        res.send(err);

      } else {

        // console.log('DOC -----------------------------', doc);
        res.send(req.body);
      }
    });
  },

  returnAdmin : function(req, res) {

    Admin.find({}, function(err, doc) {

      if (err) {

        console.log("ERROR");
        res.send(err);

      } else {

        res.send(doc);
      }
    });
  },

  toggleOrder : function(req, res) {

    // console.log("DAT BODY ----------------", req.body);
    // console.log("ID _______________________", req.body._id);

    Admin.update({_id :  req.body._id}, req.body, function(err, doc) {

      if (err) {

        console.log('ERROR');
        res.send(err);

      } else {

        // console.log('success');
        res.send(req.body);
      }
    });
  }
};

module.exports = adminController;