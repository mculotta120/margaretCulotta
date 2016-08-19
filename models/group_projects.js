var mongoose = require('mongoose');  // require mongoose for mongo db
var Schema = mongoose.Schema;

var group_projectsSchema = new mongoose.Schema({  // set up new mongoose schema
  projectName: String,
  description: String,
  url: String,
  login: String,
  devTeam: String,
  technologies: String
});


var group_projects = mongoose.model( 'group_projects', group_projectsSchema );  // sets schema to model var

module.exports=group_projects;
