let path = require('path');


module.exports = function (app) {

    app.get('/survey', function (req, res) {
        console.log(__dirname)
        res.sendFile(path.join(__dirname, '../public/survey.html'));
       // res.sendFile(path.join(__dirname, '../public/survey.js'));
        //app.use(express.static(path.join(__dirname, '../public/survey.js')));
    });

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
        
    });

};