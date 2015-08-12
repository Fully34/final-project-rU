
//============================== requirements ==============================//
        
var express = require('express');
var bodyParser = require('body-parser');
var customerController = require('./controllers/customer.js');
var adminController = require('./controllers/admin.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cam-store');

//============================== config ==============================//
        
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //> handle json data coming from POST reqs


//============================== template routing ==============================//
        
app.get('/templates/:templateName', function(req, res){
  res.render('templates/' + req.params.templateName)
});

//============================== client routing ==============================//
        
app.get('/', customerController.index); //> custController

//============================== admin routing ==============================//

    // route here

// ================== DON'T NEED THIS ROUTE, SINCE IT'S HANDLED BY ANGULAR =====================//

// app.get('/admin', adminController.index); //> adminController

app.get('/admin/addItem', adminController.get)
app.post('/admin/addItem', adminController.create);

//============================== server ==============================//
        
var server = app.listen(9001, function() {
	console.log('Express server listening on port ' + server.address().port);
});
