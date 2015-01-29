'use strict';

import _ from 'lodash';

import app from '../main';

function subRedditItemFactory() {
  class SubRedditItem {
    constructor(attrs) {
      _.extend(this, attrs);
    }

    get slug() {
      var permalink = this.permalink.replace(/\/$/, '').split('/');
      var slug = permalink[permalink.length - 1];
      return slug;
    }

    hasImage() {
      return this.url.match(/\.(jpeg|jpg|gif|png)$/) !== null;
    }
  }

  return SubRedditItem;
}

app.factory('SubRedditItem', subRedditItemFactory);
