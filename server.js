var express = require('express');
var app = express();

var movieInfo = require('movie-info')


app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));
app.get('/', function(request,response){
    response.render('index.html');
});

app.listen(3000,function(){
    console.log("Server Conneced on port 3000!");
});



