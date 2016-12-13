var express = require('express');
var path = require('path');
var mongoose = require('mongoose');


var app = express();

app.use(express.static('public'));


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
