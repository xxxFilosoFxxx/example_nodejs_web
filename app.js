const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const config = require("./config.js");

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});

// redirect bootstrap JS
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
// redirect JS jQuery
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
// redirect CSS bootstrap
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
// redirect CSS and JS
app.use("/public", express.static("public"));

app.set("view engine", "ejs");

async function sendMessage(toText, toHtml) {
  let transporter = nodemailer.createTransport({
    host: "Mail.ru",
    auth: {
      user: "user",
      pass: "pass",
    },
  });

  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  let info = await transporter.sendMail({
    from: "user",
    to: "example@example.com",
    subject: "Wal Glass",
    text: toText,
    html: toHtml,
  });

  console.log("Message sent: %s", info.message);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

app.get("/", function(req, res) {
  res.render("index", {
    title: "Wall Glass",
  });
});

app.post("/", urlencodedParser, function(req, res) {
  const htmlEmail = `
        <h3>Contact details</h3>
        <ul>
        <li>Имя: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `;

  sendMessage(req.body.message, htmlEmail);
  res.render("index", {
    title: "Wall Glass",
  });
});

app.listen(config.PORT, () =>
  console.log(`App listening on port ${config.PORT}!`),
);

