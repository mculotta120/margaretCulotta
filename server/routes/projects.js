var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');  // require bodyparser for POST calls
var mongoose = require('mongoose');  // require mongoose for mongo db
var projects = require('../../models/projects.js');  // requiring the solo_projects model
var router = express.Router();


router.get('/getProjects', function (req, res) {
  console.log('in /getProjects');
  projects.find().then(function(data){
  res.send(data);
  });
});
module.exports = router;
