// Copyright (c) 2013 Vincent Mac <vincent@vincentmac.com>
// uninstall.js

/**
 * This is a simple script to remove/unlink this generator from the yeoman global
 * generators directory upon uninstall.
 */

'use strict';

var fs = require('fs')
  , path = require('path')
  , yeomanGeneratorPath
  , yeoman;

// Relative path to yeoman generators
yeomanGeneratorPath = 'yeoman/node_modules/yeoman-generators/lib/generators';

// Full path to yeoman generators
yeoman = path.resolve(__dirname, '..', yeomanGeneratorPath);

/**
 * Remove existing symlink to foundation generator
 */

function unlinkPrevious() {
  fs.unlink(path.resolve(yeoman, 'foundation'), function(err) {
    if (err) return console.log('unlink error:', err);
    return console.log('yeoman-foundation successfully unlinked from global generators directory.',
      'Proceed with uninstall...');
  });
}

// Check if foundation generator is installed in global generators directory
fs.exists(path.resolve(yeoman, 'foundation'), function(foundationExists) {
  if (foundationExists) {
    console.log('Foundation found.  Proceed with unlink...');
    unlinkPrevious();
  }
});

