var express = require('express')
  , path    = require( 'path' )
  , app     = express();

app.use( express.static('./app') );

app.all( '/*', function( req, res ) {
    res.sendFile( path.resolve( 'app/index.html' ) );
});

module.exports = app;