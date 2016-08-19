var express = require('express');
var app = express();
var path=require('path');
var bodyParser=require('body-parser');
var mongoose = require('mongoose');  // require mongoose for mongo db

var projects = require('./routes/projects');
//spin up server

// app.listen(app.get('port'), function(){
//   console.log('listening on port: ', app.get('port'));
// });

app.listen(process.env.PORT || 5000, function(){ console.log("Running on local port 5000"); });

app.use( express.static( 'public' ) );

// app.set('port', (process.env.PORT || 5000));


var mongoURI = "mongodb://mculotta1:user@ds033133.mlab.com:33133/mculotta";
console.log("1");
var mongoDB = mongoose.connect(mongoURI).connection;
console.log("2");

mongoDB.on('error', function(err){
   if(err) {
     console.log("MONGO ERROR: ", err);
   }
});

mongoDB.once('open', function(){
   console.log("Connected to Mongo");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes redirects
app.use('/', projects);

// base url
app.get( '/', function( req, res ){
  var file = req.params[0] || '/views/index.html';
res.sendFile(path.join(__dirname, '../public/', file));
});
