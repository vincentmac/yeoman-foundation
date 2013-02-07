yeoman-foundation
=================

This is a [yeoman](http://yeoman.io) generator that scaffolds out a project using [Zurb Foundation](http://foundation.zurb.com) by default, expanding on yeoman's `quickstart` generator.  This generator will install *Zurb Foundation*, *jQuery*, *Backbone.js*, *Underscore.js*, and *Require.js*.

## Requirements

You will need the `zurb-foundation` compass gem installed. Visit the [foundation documentation](http://foundation.zurb.com/docs/compass.php) for detailed directions on installation.  If you already have your ruby environment setup, all you need to do for installation is:

`[sudo] gem install zurb-foundation`

## Installation

You can install this generator globally via npm:

`[sudo] npm install -g yeoman-foundation`

I have only tested this on Mac OS X, but it should work on Windows and Linux. During a global npm install, the generator will get copied over to your global yeoman generator path:

`/usr/local/lib/node_modules/yeoman/node_modules/yeoman-generators/lib/generators/foundation/`

## Usage

After copying to your global generator location, use:

`yeoman init foundation` 

to generate the basic scaffolding for a foundation based project.

This generator provides a scaffold that uses require.js to load javascript modules. After generating the project scaffolding a [node child_process](http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options) will run to install jQuery, Backbone, and Require.js along with any dependencies.  This child process is running 
`yeoman install jquery backbone requirejs --save`
so you don't have to after.

Note: There is a bug in Yeoman 0.9.6 that is preventing the `--save` argument from adding files to `component.json`.  If you would like your components saved in there, run: 
`bower install jquery backbone requirejs --save`
to add them.

