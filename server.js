var express = require('express')




var app = express()

//app.set('view engine', 'html');
var PORT = process.env.port || 8080; 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./app/routing/htmlRoutes")(app);
require('./app/routing/apiRoutes')(app);

app.listen(PORT, function(){
    console.log("listening on port: " + PORT);
});