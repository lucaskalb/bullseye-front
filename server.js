var http = require('http')
  , app = require('./config/express');

http.createServer( app ).listen( 3001, function () {
    console.log( 'Listening on port: ' + this.address().port );
});

