var mongoose = require('mongoose');  // require mongoose for mongo db
var Schema = mongoose.Schema;

var solo_projectsSchema = new mongoose.Schema({  // set up new mongoose schema
  projectName: String,
  description: String,
  url: String,
  login: String,
  technologies: String
});


var solo_projects = mongoose.model( 'solo_projects', solo_projectsSchema );  // sets schema to model var

module.exports=solo_projects;
