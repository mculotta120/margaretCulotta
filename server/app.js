var express = require('express');
var app = express();
var path=require('path');
var bodyParser=require('body-parser');
// var urlencodedParser=bodyParser.urlencoded( { extended: false } );
// var pg=require('pg');
// // postgres must be running and you must have this db name correct
// var connectionString = 'postgres://localhost:5432/tasklist';
// static public folder

// app.use( express.static( 'public' ) );
app.set('port', (process.env.PORT || 5000));
// base url
app.get( '/*', function( req, res ){
  var file = req.params[0] || '/views/index.html';
res.sendFile(path.join(__dirname, '../public/', file));
});


//spin up server
app.listen(app.get('port'), function(){
  console.log('listening on port: ', app.get('port'));
});

module.exports = app;
