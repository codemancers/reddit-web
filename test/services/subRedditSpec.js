'use strict';

import angular from 'angular';
import 'angular-mocks';

import app from '../../src/scripts/main';
import '../../src/scripts/services/subReddit';

describe('Service: SubReddit', function() {
  var subReddit, SubRedditItem, httpBackend;

  beforeEach(function() {
    angular.mock.module(app.name);

    inject(function($injector) {
      subReddit = $injector.get('subReddit');
      SubRedditItem = $injector.get('SubRedditItem');
      httpBackend = $injector.get('$httpBackend');
    });
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('default name', function() {
    it('should have a default name', function() {
      expect(subReddit.name).toBe('front');
    });
  });

  describe('default sortOrder', function() {
    it('should have a default sortOrder', function() {
      expect(subReddit.sortOrder).toBe('hot');
    });
  });

  describe('list', function() {
    it('should fetch subreddit items', function() {
      subReddit.name = 'cats';

      var result = {
        data: {
          children: [{
            data: {
              foo: 'foo'
            }
          }]
        }
      };

      expect(subReddit.items.length).toBe(0);

      httpBackend.expectGET(/api/).respond(result);
      subReddit.list();
      httpBackend.flush();

      expect(subReddit.items.length).toBeGreaterThan(0);
      expect(subReddit.items[0]).toEqual(jasmine.any(SubRedditItem));
    });
  });
});

