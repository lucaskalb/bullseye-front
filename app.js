/*jshint node:true*/
'use strict';

var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
var compress     = require('compression');
var logger       = require('morgan');
var port         = process.env.PORT || 3001;
var environment = process.env.NODE_ENV;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compress());
app.use(logger('dev'));

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

var source = '';

app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

console.log('** DEV **');
app.use('/', express.static('./src'));
app.use('/', express.static('./'));

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nprocess.cwd = ' + process.cwd());
});
