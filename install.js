// Copyright (c) 2013 Vincent Mac <vincent@vincentmac.com>
// install.js
'use strict';

var fs = require('fs')
  , path = require('path')
  , yeomanGeneratorPath
  , yeoman
  , foundation;

// Relative path to yeoman generators
yeomanGeneratorPath = 'yeoman/node_modules/yeoman-generators/lib/generators';

// Full path to yeoman generators
yeoman = path.resolve(__dirname, '..', yeomanGeneratorPath);

// Full path to foundation generator
foundation = path.resolve(__dirname, 'foundation');

// console.log('yeoman path:', yeoman);
// console.log('foundation path', foundation);

/**
 * Remove existing symlink to foundation generator
 */

function unlinkPrevious(callback) {
  fs.unlink(path.resolve(yeoman, 'foundation'), function(err) {
    if (err) return console.log('unlink error:', err);
    console.log('Previous version of yeoman-foundation successfully unlinked...');
    return callback();
  });
}

/**
 * Create new symlink to the foundation generator
 */

function linkFoundation() {
  fs.symlink(foundation, path.resolve(yeoman, 'foundation'), 'dir', function(err) {
    if (err) return console.log('symlink error:', err);
    return console.log('Successfully installed yeoman-foundation in', foundation,
      ' and created a symlink in', yeoman);
  });
}

/**
 * Deciding to install locally or globally?
 *
 * If we are installing the generator globally, this script will be
 * running from within the global `node_modules` directory. As yeoman is
 * installed globally, we can then check if yeoman is installed by checking
 * if the path to its generators exists. If the path exists, create a
 * symlink to this generator. If yeoman is not found, install completes in the
 * local scope (ie in the user's current project's `node_modules` folder or
 * if not in a project the user's `node_modules` folder) without creating a symlink.
 */

fs.exists(yeoman, function(yeomanExists) {
  console.log(yeomanExists ? "Yeoman is installed" : "Yeoman not installed or local install");
  if (yeomanExists) {
    // Check for previous foundation install
    fs.exists(path.resolve(yeoman, 'foundation'), function(foundationExists) {
      if (foundationExists) {
        // if previous version is found unlink then proceed with creating symlink to new version.
        console.log('Previous version found.  Proceed with unlink...');
        unlinkPrevious(linkFoundation);
      } else {
        console.log('No previous version found.  Link new version...');
        linkFoundation();
      }
    });
  }
});

