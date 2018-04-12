var express = require('express');
var app = express();
var $ = require('cheerio');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var movieInfo = require('movie-info')


app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/'));

app.get('/', function(request,response){
    response.render('index.html');
});

app.listen(3100,function(){
    console.log("Server Conneced on port 3200!");
});



app.get('/movies', function(req, res) {
    var searchresult = req.query.result;
    console.log(searchresult);

	movieInfo(searchresult).then(
	    function (res) {
	        results = res;   
	        resultsStr = JSON.stringify(results);
	        
	        console.log(resultsStr)
	        //=> { ... }
	    },
	    function (err) {
	        // failed
	    }
	)

	res.redirect('back');

});

