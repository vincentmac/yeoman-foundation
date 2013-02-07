// Copyright (c) 2013 Vincent Mac <vincent@vincentmac.com>

// install.js
'use strict';

var fs =require('fs')
  , path = require('path')
  , yeoman
  , foundation
  , yeomanGeneratorPath;

  // Relative path to yeoman generators
  yeomanGeneratorPath = 'yeoman/node_modules/yeoman-generators/lib/generators';

  foundation = path.resolve(__dirname, 'foundation');

  /**
   * Deciding to install locally or globally?
   *
   * If we are installing the generator globally, this script will be
   * running from within the global `node_modules` directory. We
   * can then check if yeoman is installed by checking if the path to
   * its generators exists. If the path exists, create a symlink to this
   * generator.
   */

  yeoman = path.resolve(__dirname, '..', yeomanGeneratorPath);
  // console.log('yeoman path:', yeoman);
  // console.log('foundation path', foundation);

// TODO detect if generator is already installed.
// if installed, fs.unlink


  fs.exists(yeoman, function (exists) {
    console.log(exists ? "it's there" : "no yeoman or local install");
    if (exists) {
      // create symlink
      fs.link(foundation, path.resolve(yeoman, 'foundation'), function(err) {
        if (err) console.log('error', err);
        console.log('successfully installed yeoman-foundation in', foundation);
        console.log('and created a link in ', yeoman);
      });
    }
  });