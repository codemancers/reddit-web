'use strict';

var express  = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');

var Snoocore = require('snoocore');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));

if(env === 'development') {
  console.log('App running in development environment');
  app.use(require('connect-livereload')());
}

app.use(express.static(__dirname + '/.tmp'));
app.use(express.static(__dirname + '/src'));
app.use('/jspm_packages',  express.static(__dirname + '/jspm_packages'));
app.use('/views',  express.static(__dirname + '/app/views'));

var reddit = new Snoocore({
  userAgent: 'RedditWeb@0.0.1'
});

app.get('/api', function(req, res) {
  var promise = reddit(req.query.url).get({
    after: req.query.after
  });

  promise.then(function(result) {
    res.send(result);
  }).catch(function(error) {
    console.log('error', error);
    res.send(error);
  }).done();
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/src/index.html');
});

var port = process.env.PORT || 9000;
app.listen(port);
console.log('App listening on port', port);
