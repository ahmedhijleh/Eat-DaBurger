var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var port = process.env.PORT || 3500;
var app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded(extended:false));
app.use(methodOverride("_method"));
var routes = require("./controllers/burgerController.js");             //i cant fully understand the handlebars
app.use("/",routes);
app.listen(port);
