
var util = require('util')
  , path = require('path')
  , yeoman = require('yeoman');

module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.setupEnv = function setupEnv() {
  // Copies the contents of the generator `templates`
  // directory into your users new application path
  this.directory('.','.');
};

Generator.prototype.installPackage = function installPackage() {
  var spawn = require('child_process').spawn
    , child;

  console.log('Finished generating Foundation scaffold.');
  console.log('Installing latest jQuery, Backbone, and Require.js...');

  child = spawn('yeoman', ['install', 'jquery', 'backbone', 'requirejs', '--save']);

  child.stdout.setEncoding('utf8');
  child.stdout.on('data', function(data) {
    console.log(data.toString());
  });

  child.stderr.on('data', function(data) {
    console.log('stderr:', data);
  });

  child.on('exit', function(code) {
    console.log('Latest components successfully installed.');
  });

};

