var express = require('express');
var app = express();
var $ = require('cheerio');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const fetch = require('node-fetch');
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
    const url = "https://api.themoviedb.org/3/search/movie?api_key=9d2bff12ed955c7f1f74b83187f188ae&query=" + searchresult ;

    fetch(url)
        .then(res => res.json())
        .then(json =>res.send(json));
        


	
});




  



// https://api.themoviedb.org/3/search/movie?api_key=9d2bff12ed955c7f1f74b83187f188ae&query=avatar