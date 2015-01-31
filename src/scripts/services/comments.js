'use strict';

import _ from 'lodash';

import app from '../main';

function commentsFactory($http) {
  class Comments {
    constructor(itemId) {
      this.itemId = itemId;
      this.after = '';
      this.busy = false;
      this.items = [];
    }

    list() {
      if (this.busy) {
        return;
      }

      this.busy = true;

      $http.get('/api', {
        params: {
          url: this._url(),
          after: this.after
        }
      }).success((result) => {
        // the first element represents the subreddit item, not comment
        result = result[1];

        this.after = result.data.after;

        var items = result.data.children;

        _.forEach(items, function(item) {
          this.items.push(item);
        }, this);

        console.log('items', items);

        this.busy = false;
      });
    }

    _url() {
      return `/comments/${this.itemId}`;
    }
  }

  return Comments;
}

commentsFactory.$inject = ['$http'];

app.factory('Comments', commentsFactory);
