const express = require("express");
const app = express();

// redirect bootstrap JS
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
// redirect JS jQuery
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
// redirect CSS bootstrap
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
// redirect CSS and JS
app.use("/public", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index", {
    title: "Название",
  });
});

app.listen(8000, function() {
  console.log("Example app listening on port 8000!");
});

