
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

/**
 * Install frontend components via yeoman/bower
 */

Generator.prototype.installComponents = function installComponents() {
  var spawn = require('child_process').spawn
    , child
    , cb;

  cb = this.async();

  console.log('Finished generating foundation scaffold.');
  console.log('Installing latest jQuery, Backbone, Require.js, and require-jade...');

  child = spawn('yeoman', ['install', 'jquery', 'backbone', 'requirejs', 'require-jade', '--save']);

  child.stdout.setEncoding('utf8');
  child.stdout.on('data', function(data) {
    console.log(data.toString());
  });

  child.stderr.on('data', function(data) {
    console.log('stderr:', data);
  });

  child.on('exit', function(code) {
    console.log('Latest components successfully installed.');
    cb();
  });

};

