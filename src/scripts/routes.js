'use strict';

import app from './main';
import './controllers/subReddit';

function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/r/front/');

  $stateProvider
    .state('front', {
      url: '/r/front/:sortOrder',
      templateUrl: 'views/list.html',
      controller: 'SubRedditController',
      controllerAs: 'ctrl'
    })
    .state('subreddit', {
      url: '/r/:name/:sortOrder',
      templateUrl: 'views/list.html',
      controller: 'SubRedditController',
      controllerAs: 'ctrl'
    });

  $locationProvider.html5Mode(true);
}

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

app.config(routeConfig);
