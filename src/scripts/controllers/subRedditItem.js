'use strict';

import app from '../main';
import '../directives/comments';
import '../directives/comment';
import '../services/subReddit';
import '../services/comments';

function SubRedditItemController($scope, $stateParams, subReddit, Comments) {
  this.active = true;
  this.post = subReddit.find($stateParams.id);
  this.comments = new Comments($stateParams.id);
  this.comments.list();

  if (!this.post) {
    $scope.$watch(() => {
      return this.comments.post.id;
    }, () => {
      this.post = this.comments.post;
    });
  }
}

SubRedditItemController.$inject = ['$scope', '$stateParams', 'subReddit', 'Comments'];

app.controller('SubRedditItemController', SubRedditItemController);
