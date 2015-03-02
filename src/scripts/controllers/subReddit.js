'use strict';

import app from '../main';
import '../directives/infiniteScroll';
import '../services/subReddit';

function SubRedditController($stateParams, $state, $timeout, $mdSidenav, subReddit) {
  this.subReddit = subReddit;
  this.subReddit.reset();
  this.subReddit.name = $stateParams.name || 'front';
  this.subReddit.sortOrder = $stateParams.sortOrder;
  this.subReddit.list();

  this.title = `/r/${this.subReddit.name}/${this.subReddit.sortOrder}`;

  this.isActive = isActive;
  this.openMenu = openMenu;
  this.refresh = refresh;

  function isActive() {
    return $state.current.name === 'front' || $state.current.name === 'subreddit';
  }

  function openMenu() {
    $timeout(function() { $mdSidenav('left').open(); });
  }

  function refresh() {
    this.subReddit.reset();
    this.subReddit.list();
  }
}

SubRedditController.$inject = ['$stateParams', '$state', '$timeout', '$mdSidenav', 'subReddit'];

app.controller('SubRedditController', SubRedditController);
