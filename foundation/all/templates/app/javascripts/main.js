require.config({

  paths: {
    backbone: ['../components/backbone/backbone', '../components/backbone/backbone-min']
  , jade: '../components/require-jade/jade'
  , jquery: '../components/jquery/jquery.min'
  , underscore: ['../components/underscore/underscore', '../components/underscore/underscore-min']
  },

  shim: {
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'underscore': {
      deps: ['jquery'],
      exports: '_'
    },
    
    'app': {
      deps: ['underscore', 'backbone', 'vendor/foundation/app']
    },

    'vendor/foundation/jquery.cookie': {deps: ['jquery'] },
    'vendor/foundation/jquery.event.move': {deps: ['jquery'] },
    'vendor/foundation/jquery.event.swipe': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.accordion': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.alerts': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.buttons': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.clearing': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.forms': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.joyride': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.magellan': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.mediaQueryToggle': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.navigation': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.orbit': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.reveal': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.tabs': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.tooltips': {deps: ['jquery'] },
    'vendor/foundation/jquery.foundation.topbar': {deps: ['jquery'] },
    'vendor/foundation/jquery.offcanvas': {deps: ['jquery'] },
    'vendor/foundation/jquery.placeholder': {deps: ['jquery'] },
    'vendor/foundation/app': {
      deps: [
        'vendor/foundation/jquery.cookie',
        'vendor/foundation/jquery.event.move',
        'vendor/foundation/jquery.event.swipe',
        'vendor/foundation/jquery.foundation.accordion',
        'vendor/foundation/jquery.foundation.alerts',
        'vendor/foundation/jquery.foundation.buttons',
        'vendor/foundation/jquery.foundation.clearing',
        'vendor/foundation/jquery.foundation.forms',
        'vendor/foundation/jquery.foundation.joyride',
        'vendor/foundation/jquery.foundation.magellan',
        'vendor/foundation/jquery.foundation.mediaQueryToggle',
        'vendor/foundation/jquery.foundation.navigation',
        'vendor/foundation/jquery.foundation.orbit',
        'vendor/foundation/jquery.foundation.reveal',
        'vendor/foundation/jquery.foundation.tabs',
        'vendor/foundation/jquery.foundation.tooltips',
        'vendor/foundation/jquery.foundation.topbar',
        'vendor/foundation/jquery.offcanvas',
        'vendor/foundation/jquery.placeholder',
        'vendor/foundation/modernizr.foundation',
      ]
    }
  }

});

require(['app'], function(app) {
  'use strict';
  console.log(app);
});