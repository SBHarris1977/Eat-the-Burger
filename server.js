/*var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();

//serve static content for the app from the 'public' directory in the application.
app.use(express.static("public"));

//Parse applicatipn body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set handlebars
var exphbs = require("express-handlebars");
//app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("main");
});

//Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Start the server so that it can begin listening to cilent requests.
app.listen(PORT, function() {
    //Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});*/
var path = require("path");

var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");
// app.get("/", (req, res) => {
//  res.render("index");
// });
var routes = require("./controllers/burgers_controller.js");
app.use(routes);
app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});




