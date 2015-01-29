'use strict';

import app from '../main';
import '../services/subReddit';

function SubRedditItemController($stateParams, subReddit) {
  this.item = subReddit.find($stateParams.id);
}

SubRedditItemController.$inject = ['$stateParams', 'subReddit'];

app.controller('SubRedditItemController', SubRedditItemController);
