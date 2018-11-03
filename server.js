var express = require('express')

var app = express()

//app.set('view engine', 'html');
var PORT = process.env.port || 8080; 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/app' ));
console.log(__dirname + '/public')
require("./app/routing/htmlRoutes")(app);
require('./app/routing/apiRoutes')(app);

app.listen(process.env.PORT || 8080, function(){
   // console.log("listening on port: " + PORT);
    console.log(__dirname + '/app');
});