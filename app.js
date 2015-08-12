
//============================== requirements ==============================//
        
var express = require('express');
var bodyParser = require('body-parser');
var customerController = require('./controllers/customer.js');
var adminController = require('./controllers/admin.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cam-store');

//============================== requirements for passport ==============================//

var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash =  require('connect-flash');
var passport = require('passport');
var passportConfig = require('./config/passport');


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

// > DONT NEED THIS, ANGULAR WILL PROVIDE
// app.get('/shop', customerController.getShop);

//============================== admin routing ==============================//

    // route here

// ================== DON'T NEED THIS ROUTE, SINCE IT'S HANDLED BY ANGULAR =====================//

// app.get('/admin', adminController.index); //> adminController

app.get('/api/items', adminController.get);
app.post('/api/items/:id', adminController.update);
app.post('/api/items', adminController.create);
app.delete('/api/items/:id', adminController.remove);
//============================== server ==============================//
        
var server = app.listen(9001, function() {
	console.log('Express server listening on port ' + server.address().port);
});
