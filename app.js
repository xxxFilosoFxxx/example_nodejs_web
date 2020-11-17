const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const config = require("./config.js");

const app = express();

// redirect bootstrap JS
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
// redirect JS jQuery
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
// redirect CSS bootstrap
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
// redirect CSS and JS
app.use("/public", express.static("public"));


app.set("view engine", "ejs");

app.get("/", function(request, response) {
  response.render("index", {
    title: "Wall Glass",
  });
});

app.listen(config.PORT, () =>
  console.log(`App listening on port ${config.PORT}!`),
);

