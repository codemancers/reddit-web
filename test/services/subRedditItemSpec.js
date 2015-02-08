'use strict';

import angular from 'angular';
import _ from 'lodash';
import 'angular-mocks';

import app from '../../src/scripts/main';
import '../../src/scripts/services/subRedditItem';

describe('Service: SubRedditItem', function() {
  var SubRedditItem;

  beforeEach(function() {
    angular.mock.module(app.name);

    inject(function($injector) {
      SubRedditItem = $injector.get('SubRedditItem');
    });
  });

  describe('slug', function() {
    it('should return slug from permalink', function() {
      var subRedditItem = new SubRedditItem({
        permalink: '/r/foo/comments/bar/bazz/'
      });

      expect(subRedditItem.slug).toBe('bazz');
    });
  });

  describe('hasImage', function() {
    it('should return true if the url points to an image', function() {
      var subRedditItem = new SubRedditItem();
      var validImageExtensions = [
        'jpg',
        'jpeg',
        'gif',
        'png'
      ];

      _.forEach(validImageExtensions, function(ext) {
        subRedditItem.url = `http://example.com/foo.${ext}`;

        expect(subRedditItem.hasImage()).toBe(true);
      });
    });

    it('should return false if the url does not point to an image', function() {
      var subRedditItem = new SubRedditItem();
      subRedditItem.url = 'http://example.com/foo';

      expect(subRedditItem.hasImage()).toBe(false);
    });
  });

  describe('mediaHtml', function() {
    var $sce;

    beforeEach(function() {
      inject(function($injector) {
        $sce = $injector.get('$sce');
      });
    });

    it('should return the embedded media html as trusted html', function() {
      var subRedditItem = new SubRedditItem({
        media: {
          oembed: {
            html: '&lt;h1&gt;foo&lt;/h1&gt;'
          }
        }
      });

      expect($sce.getTrustedHtml(subRedditItem.mediaHtml())).toEqual('<h1>foo</h1>');
    });
  });
});
