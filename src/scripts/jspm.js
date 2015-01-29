System.config({
  "paths": {
    "*": "*.js",
    "app/*": "*.js",
    "github:*": "../jspm_packages/github/*.js",
    "reddit-web/*": "/*.js",
    "npm:*": "../jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.11",
    "angular-material": "github:angular/bower-material@0.7.0",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.13",
    "css": "github:systemjs/plugin-css@0.1.0",
    "hammer": "github:hammerjs/hammer.js@2.0.4",
    "lodash": "npm:lodash@3.0.0",
    "ng-infinite-scroll": "github:sroze/ngInfiniteScroll@1.2.0",
    "github:angular-ui/ui-router@0.2.13": {
      "angular": "github:angular/bower-angular@1.3.11"
    },
    "github:angular/bower-angular-animate@1.3.11": {
      "angular": "github:angular/bower-angular@1.3.11"
    },
    "github:angular/bower-angular-aria@1.3.11": {
      "angular": "github:angular/bower-angular@1.3.11"
    },
    "github:angular/bower-material@0.7.0": {
      "angular": "github:angular/bower-angular@1.3.11",
      "angular-animate": "github:angular/bower-angular-animate@1.3.11",
      "angular-aria": "github:angular/bower-angular-aria@1.3.11",
      "css": "github:systemjs/plugin-css@0.1.0",
      "hammer": "github:hammerjs/hammer.js@2.0.4"
    },
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "github:sroze/ngInfiniteScroll@1.2.0": {
      "angular": "github:angular/bower-angular@1.3.11"
    },
    "npm:lodash@3.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    }
  }
});

