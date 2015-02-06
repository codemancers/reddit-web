'use strict';

import _ from 'lodash';

import app from '../main';
import './subRedditItem';

function commentsFactory($http, SubRedditItem) {
  class Comments {
    constructor(itemId) {
      this.itemId = itemId;
      this.after = '';
      this.busy = false;
      this.items = [];
      this.post = {};
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
        // the first element represents the subreddit post, not comment
        this.post = new SubRedditItem(result[0].data.children[0].data);

        result = result[1];

        this.after = result.data.after;

        var items = result.data.children;

        _.forEach(items, function(item) {
          this.items.push(item);
        }, this);

        this.busy = false;
      });
    }

    _url() {
      return `/comments/${this.itemId}`;
    }
  }

  return Comments;
}

commentsFactory.$inject = ['$http', 'SubRedditItem'];

app.factory('Comments', commentsFactory);
