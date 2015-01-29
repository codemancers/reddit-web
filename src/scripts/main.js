'use strict';

// Ugly hack until angular-material removes Hammer.js dependency
// https://github.com/angular/material/issues/456
import Hammer from 'hammer';
window.Hammer = Hammer;

import angular from 'angular';
import 'angular-material';
import 'angular-ui-router';
import 'ng-infinite-scroll';

var app = angular
  .module('redditWeb', [
    'ngMaterial',
    'ui.router',
    'infinite-scroll'
  ]);

export default app;
