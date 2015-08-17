
//============================== requirements ==============================//

var express = require('express');
var bodyParser = require('body-parser');
var customerController = require('./controllers/customer.js');
var adminController = require('./controllers/admin.js');
var authenticationController = require('./controllers/authenticate.js')
var mongoose = require('mongoose');
var moment = require('moment');
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

app.use(cookieParser());
app.use(flash());

// Initialize the express session. Needs to be given a secret property.
// Also requires the resave option (will not force a resave of session if not modified)
// as well as saveUninitialized(will not automatically create empty data)
app.use(session({
  secret: 'camCam', //> every site should have different secret
  resave: false, //> wont try to resave if the session has been modified
  saveUninitialized: false //> 
}));

// Hook in passport to the middleware chain
app.use(passport.initialize());

// Hook in the passport session management into the middleware chain.
app.use(passport.session()); //> express sessions become passport sessions

// Post received from submitting the login form
app.post('/login', authenticationController.processLogin);

// Any requests to log out can be handled at this url
app.get('/logout', authenticationController.logout);

//============================== template routing ==============================//

app.get('/templates/:templateName', function(req, res){
  res.render('templates/' + req.params.templateName)
});

//============================== client routing ==============================//

app.get('/', customerController.index); //> custController

//============================== admin middleware ==============================//

var auth = function(req, res, next) {

  if(!req.isAuthenticated()) {

    res.send(401);

  } else {

    next();
  }
};


//============================== auth routes ==============================//

app.get('/loggedin', function(req, res) {

  res.send(req.isAuthenticated() ? req.user : '0'); //> returning 0 if they person isn't real
});

app.post('/login', passport.authenticate('local'), function(req, res) {

  res.send(req.user);
});

app.post('/logout', function(req, res) {

  req.logOut();
  res.send(200);
});

//============================== customer checkout routes ==============================//

app.get('/api/customer', customerController.get);
app.post('/api/customer', customerController.create);
app.post('/api/customer/:id', adminController.updateCustomer);

//============================== admin api routes ==============================//
        
app.get('/api/me', function(req, res) {

  res.send(req.user);
});

app.get('/api/items', adminController.get);
app.post('/api/items/:id', auth, adminController.updateItem);
app.post('/api/items', auth, adminController.create);
app.delete('/api/items/:id', auth, adminController.remove);
//============================== server ==============================//
        
var server = app.listen(9001, function() {
	console.log('Express server listening on port ' + server.address().port);
});
