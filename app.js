
//============================== requirements ==============================//
        
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cam-store');

//============================== config ==============================//
        
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //> handle json data coming from POST reqs

//============================== client routing ==============================//
        
app.get('/', customerController.index); //> custController

//============================== admin routing ==============================//

// NEED TO DO APP.USE(isAutorized)
app.get('/', adminController.index); //> adminController
        
//============================== server ==============================//
        
var server = app.listen(9001, function() {
	console.log('Express server listening on port ' + server.address().port);
});
