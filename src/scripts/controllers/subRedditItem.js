'use strict';

import app from '../main';
import '../directives/comments';
import '../directives/comment';
import '../services/subReddit';
import '../services/comments';

function SubRedditItemController($stateParams, subReddit, Comments) {
  this.item = subReddit.find($stateParams.id);
  this.comments = new Comments($stateParams.id);
  this.comments.list();
}

SubRedditItemController.$inject = ['$stateParams', 'subReddit', 'Comments'];

app.controller('SubRedditItemController', SubRedditItemController);
