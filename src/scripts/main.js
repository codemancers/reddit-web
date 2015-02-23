'use strict';

import angular from 'angular';
import 'angular-material';
import 'angular-ui-router';
import 'angular-sanitize';
import 'angular-moment';
import 'showdown';
import 'angular-markdown-directive';

var app = angular
  .module('redditWeb', [
    'ngAnimate',
    'ngMaterial',
    'ui.router',
    'angularMoment',
    'ngSanitize',
    'btford.markdown'
  ])
  .constant('angularMomentConfig', {
    preprocess: 'unix'
  });

export default app;
