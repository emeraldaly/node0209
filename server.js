var express = require('express');
var mysql = require('/mysql');
var app = express();
var expressHandlebars = require('express-handlebars');

app.engine('handlebars', expressHandlebars)
app.set('view engine', 'handlebars')

var icecreams = [{name: 'vanilla', price: 10, awesomeness: 3}, 
                  {name: 'chocolate', price: 4, awesomeness: 8}, 
                  {name: 'banana', price: 1, awesomeness: 1}, 
                  {name: 'greentea', price: 5, awesomeness: 7}, 
                  {name: 'jawbreakers', price: 6, awesomeness: 2}, ]; 

}

app.get('/', function (req, res))
res.render('menu', )

app.listen(PORT, function() {
  console.log("listening on port %s", PORT);
  });