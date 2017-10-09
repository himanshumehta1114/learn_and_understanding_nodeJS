var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req,res){
    res.render('index');
});

app.use('/', function(req,res,next){
    console.log('request url: ' + req.url);
    next();
});
//using templates
app.set('view engine','ejs');

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe'});
});

app.use('/assets',express.static(__dirname + '/public'));
app.get('/person/:id', function(req, res){
    res.render('person', {ID: req.params.id});
    });
app.listen(port);