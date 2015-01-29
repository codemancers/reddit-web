'use strict';

import app from './main';
import './routes';

angular.element(document).ready(function() {
  angular
    .bootstrap(document, [app.name], {
      strictDi: true
    });
});
