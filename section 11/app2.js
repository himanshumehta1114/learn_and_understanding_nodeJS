var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var people = [
    {
        name: 'John Doe'
    },
    {
        name: 'Jane Doe'
    },
    {
        name: 'Jim Doe'
    }
];

app.get('/', function (req,res){
    res.render('index', {serverPeople : people});
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
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();
app.post('/person',urlencodedParser,function(req,res){
    res.send('Thank You :)');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson',jsonParser,function(req,res){
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.use('/assets',express.static(__dirname + '/public'));
app.get('/person/:id', function(req, res){
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr});
    });
app.listen(port);