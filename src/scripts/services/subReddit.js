'use strict';

import _ from 'lodash';

import app from '../main';
import './subRedditItem';

function subRedditFactory($http, SubRedditItem) {
  class SubReddit {
    constructor() {
      this.reset();
    }

    reset() {
      this.name = 'front';
      this.sortOrder = 'hot';
      this.items = [];
      this.busy = false;
      this.after = '';
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
        this.after = result.data.after;

        var items = result.data.children;

        _.forEach(items, function(item) {
          var subRedditItem = new SubRedditItem(item.data);
          this.items.push(subRedditItem);
        }, this);

        this.busy = false;
      });
    }

    find(id) {
      var item = _.find(this.items, function(item) {
        return item.id === id;
      });

      return item;
    }

    _url() {
      var url;

      if (this.name === 'front') {
        url = '';
      } else {
        url = `/r/${this.name}`;
      }

      return `${url}/${this.sortOrder}`;
    }
  }

  return new SubReddit();
}

subRedditFactory.$inject = ['$http', 'SubRedditItem'];

app.factory('subReddit', subRedditFactory);
