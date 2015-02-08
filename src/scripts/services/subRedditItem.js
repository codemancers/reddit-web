'use strict';

import _ from 'lodash';

import app from '../main';

function subRedditItemFactory($sce) {
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

    mediaHtml() {
      var html = _.unescape(this.media.oembed.html);
      return $sce.trustAsHtml(html);
    }
  }

  return SubRedditItem;
}

subRedditItemFactory.$inject = ['$sce'];

app.factory('SubRedditItem', subRedditItemFactory);
