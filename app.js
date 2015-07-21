var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');


//============================== set up jade + views ==============================//
        
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

//============================== .use stuff ==============================//

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//============================== get handlers ==============================//
        
app.get('/', indexController.index);

// what to do on formsubmit
app.post('/formsubmit', indexController.formSubmit);

// redirect will trigger a request for '/success'
    // Just want to send the user a message
app.get('/success', indexController.successPage);

var server = app.listen(7449, function() {
	console.log('Express server listening on port ' + server.address().port);
});
