'use strict';

import app from '../main';
import './comments';

function comment($compile, $log) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      comment: '=',
    },
    templateUrl: '../../views/comment.html',
    link: function(scope, element) {
      if (scope.comment.data.replies && scope.comment.data.replies.data.children[0].kind !== 'more') {
        element.append('<rw-comments comments="comment.data.replies.data.children" is-reply="true"></comments>');
        $compile(element.contents())(scope);
      } else {
        $log.info('rwComment: no replies available to display for:', scope.comment);
        // TODO: display 'load more' link
      }
    }
  };
}

comment.$inject = ['$compile', '$log'];

app.directive('rwComment', comment);
