var express = require('express');
var mysql = require('mysql');
var app = express();

var port = process.env.NODE_ENV || 8090;

var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  database: 'wizardry_school_db'
});

connection.connect(function(err) {
  if(err) {
    throw err;
  }

  console.log("connected at id: %s", conection.threadId);
});

app.get('/cast', function(req, res) {
  connection.query("SELECT name FROM wizardry ORDER BY id", function(err, results) {
    res.send(results);
    if(err) throw(err);
  });
app.get('/coolness-chart', function(req, res) {
  connection.query("SELECT coolness-points FROM wizardry ORDER BY coolness_points DESC;", function(err, results) {
    res.send(results;
      if(err) throw(err);
      });
app.get('/attitude_chart/:type', function(req, res) {
  var type=req.params.type
  connection.query("SELECT attitude FROM wizardry WHERE attitude=" + type ";", function(err, results) {
    res.send(results);
    if(err) throw(err);
  });
});
app.get('/food/weekday', function(req, res) {
  res.sendFile()
})

app.listen(PORT, function() {
  console.log("listening on port %s", PORT);
  });