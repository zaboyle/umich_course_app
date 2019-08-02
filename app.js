var express = require('express');
var request = require("request");
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('views'));

// routes
app.get('/', function(req, res) {
	res.render('home');
});

// FROM UMICH CODE DOCS
var options = { method: 'GET',
  url: 'https://apigw.it.umich.edu/um/Curriculum/SOC/Terms/REPLACE_TERMCODE/Schools/REPLACE_SCHOOLCODE/Subjects/REPLACE_SUBJECTCODE/CatalogNbrs/REPLACE_CATALOGNUMBER/Sections/REPLACE_SECTIONNUMBER/Meetings',
  headers: 
   { accept: 'application/json',
     authorization: 'Bearer REPLACE_BEARER_TOKEN',
     'x-ibm-client-id': 'REPLACE_THIS_KEY' } };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});
// 

app.listen(3000, function() {
	console.log('Umich course app running on port 3000');
});