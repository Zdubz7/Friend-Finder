// The below variables represent a series of npm packages.
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// This variable is the seed for the database.
var friends = require('./app/data/friends.js');
var app = express();
// This variable sets up the port to my database.
var PORT = process.env.PORT || 8889;
// This section creates static assets in the public folder available which is the style.css
app.use(express.static('app/public'));
// This section sets up the express app to handle the data parsing.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// This section is requireing all of the different api routes.
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// This section requires the host which is localhost.
app.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
});