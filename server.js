//Dependencies
//===================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Sets up the Express App
//===================================================
var app = express();
var PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.text());
app.use(bodyParser.json({
	type: "application/vnd.api+json"
}));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
		console.log('APP listening in on PORT: ',PORT)
});

