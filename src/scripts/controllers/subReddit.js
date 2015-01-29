'use strict';

import app from '../main';
import '../services/subReddit';

function SubRedditController($stateParams, $state, subReddit) {
  this.subReddit = subReddit;
  this.subReddit.reset();
  this.subReddit.name = $stateParams.name || 'front';
  this.subReddit.sortOrder = $stateParams.sortOrder;

  this.title = `/r/${this.subReddit.name}/${this.subReddit.sortOrder}`;
  this.subReddit.list();
}

SubRedditController.$inject = ['$stateParams', '$state', 'subReddit'];

app.controller('SubRedditController', SubRedditController);
