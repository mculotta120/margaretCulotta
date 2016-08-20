var mongoose = require('mongoose');  // require mongoose for mongo db
var Schema = mongoose.Schema;

var projectsSchema = new mongoose.Schema({  // set up new mongoose schema
  type: String,
  projectName: String,
  description: String,
  url: String,
  login: String,
  technologies: String
});


var projects = mongoose.model( 'projects', projectsSchema );  // sets schema to model var

module.exports=projects;
