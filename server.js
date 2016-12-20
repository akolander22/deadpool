var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

var User = require('./models/user');
var login = require('./routes/login');
var register = require('./routes/register');

app.use(express.static('public'));

//session password
app.use(session({
  secret: 'whirlypop',
  key: 'user',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 60 * 1000, secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/login', login);
app.use('/register', register);


app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, 'public/views/index.html'));
})

//mongodb
var mongoURI = "";
  if(process.env.MONGODB_URI != undefined){
    // mongoURI = "mongodb://heroku_29xg3qd4:lj98hmokv852dgl7jt4facmpee@ds153765.mlab.com:53765/heroku_29xg3qd4";
  } else {
    mongoURI = "mongodb://localhost:27017/deadpool_users";
  }
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('mongodb connection error', err);
});

MongoDB.once('open', function(){
  console.log('mongodb connection open!!');
})


var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
})
