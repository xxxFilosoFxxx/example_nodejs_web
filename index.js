var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var obj = {title: "Название"}
    res.render('index', {obj: obj});
});

app.listen(8000);