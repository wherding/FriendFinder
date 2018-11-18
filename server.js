var express = require('express')

var app = express()

//app.set('view engine', 'html');
var PORT = process.env.PORT || 8080; 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/app' ));
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });
console.log(__dirname + '/public')
require("./app/routing/htmlRoutes")(app);
require('./app/routing/apiRoutes')(app);

app.listen(PORT, function(){
   // console.log("listening on port: " + PORT);
    console.log(__dirname + '/app');
});