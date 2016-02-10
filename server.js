var express = require('express');
//var mysql = require('/mysql');
var app = express();
var expressHandlebars = require('express-handlebars');
var PORT = process.env.NODE_ENV || 3000;

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var icecreams = {
  ic1: {name: 'vanilla', price: 10, awesomeness: 3}, 
  ic2: {name: 'chocolate', price: 4, awesomeness: 8}, 
  ic3: {name: 'banana', price: 1, awesomeness: 1}, 
  ic4: {name: 'greentea', price: 5, awesomeness: 7}, 
  ic5: {name: 'jawbreakers', price: 6, awesomeness: 2}
};


app.get('/:iceCreamFlavor', function (req, res, next) {
  console.log(req.params.iceCreamFlavor);
  var flavor = req.params.iceCreamFlavor;

  console.log("the ice cream flavor is " + flavor) ; 
  
  switch(flavor){
    case "vanilla":
      console.log("vanilla working");
      console.log(icecreams.ic1);
       res.render('icecream', icecreams["ic1"] );
      break;
    case "chocolate":
      res.render('icecream', icecreams.ic2 );
      break;
    case "banana":
      res.render('icecream', icecreams.ic3 );
      break;
    case "greentea":
      res.render('icecream', icecreams.ic4 );
      break;
    case "jawbreakers":
      res.render('icecream', icecreams.ic5 );
      break;

  }
 

});

 
app.listen(PORT, function() {
  console.log("listening on port %s", PORT);
  });