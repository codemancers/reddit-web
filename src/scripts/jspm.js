System.config({
  "paths": {
    "*": "*.js",
    "app/*": "*.js",
    "github:*": "../jspm_packages/github/*.js",
    "reddit-web/*": "/*.js",
    "npm:*": "../jspm_packages/npm/*.js"
  },
  "parser": "6to5"
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.11",
    "angular-markdown-directive": "github:btford/angular-markdown-directive@0.3.1",
    "angular-material": "github:angular/bower-material@0.7.0",
    "angular-mocks": "github:angular/bower-angular-mocks@1.3.11",
    "angular-moment": "github:urish/angular-moment@0.9.0",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.3.11",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.13",
    "css": "github:systemjs/plugin-css@0.1.0",
    "hammer": "github:hammerjs/hammer.js@2.0.4",
    "lodash": "npm:lodash@3.0.0",
    "moment": "github:moment/moment@2.9.0",
    "showdown": "github:showdownjs/showdown@0.3.4",
    "github:angular-ui/ui-router@0.2.13": {
      "angular": "github:angular/bower-angular@1.3.11"
    },
    "github:angular/bower-angular-animate@1.3.11": {
      "angular": "github:angular/bower-angular@1.3.11"
    },
    "github:angular/bower-angular-aria@1.3.11": {
      "angular": "github:angular/bower-angular@1.3.11"
    },
    "github:angular/bower-angular-mocks@1.3.11": {
      "angular": "github:angular/bower-angular@1.3.11"
    },
    "github:angular/bower-angular-sanitize@1.3.11": {
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
    "npm:lodash@3.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    }
  }
});

