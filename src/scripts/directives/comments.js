'use strict';

import app from '../main';

function comments() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      comments: '=',
    },
    templateUrl: '../../views/comments.html',
  };
}

app.directive('rwComments', comments);
