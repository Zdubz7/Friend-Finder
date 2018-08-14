// This variable includes the path package to get the correct file path that it needs.
var path = require('path');
// This is where the routing occurs.
module.exports = function (app) {
    // This is a basic route that sends the user to the homepage.
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
    // This route displays the survey page which is survey.html
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
    // If there is no matching route to be found, the user will be defaulted to home.
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};