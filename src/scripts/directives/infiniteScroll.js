'use strict';

import _ from 'lodash';

import app from '../main';

function infiniteScroll($log) {
  return {
    scope: {
      rwInfiniteScroll: '&'
    },

    link: function(scope, elem) {
      var dom = elem[0];

      function onScroll() {
        if (dom.scrollTop + dom.offsetHeight >= dom.scrollHeight) {
          $log.info('rwInfiniteScroll: reached element bottom, calling function from parent scope');
          scope.$apply(scope.rwInfiniteScroll);
        }
      }

      elem.bind('scroll', _.throttle(onScroll, 250));
    }
  };
}

infiniteScroll.$inject = ['$log'];

app.directive('rwInfiniteScroll', infiniteScroll);
