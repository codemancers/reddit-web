'use strict';

import app from '../main';
import '../directives/comments';
import '../directives/comment';
import '../services/subReddit';
import '../services/comments';

function SubRedditItemController($scope, $state, $stateParams, subReddit, Comments) {
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

  this.back = back;

  function back() {
    $state.go('^');
  }
}

SubRedditItemController.$inject = ['$scope', '$state', '$stateParams', 'subReddit', 'Comments'];

app.controller('SubRedditItemController', SubRedditItemController);
