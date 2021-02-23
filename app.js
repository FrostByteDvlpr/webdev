var bodyParser = require('body-parser'),
    express = require('express'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/consultation', function(req, res) {
    res.render('consultation');
});
app.get('/consultation/get-started', function(req, res) {
    res.render('get-started');
})
app.get('/contact', function(req, res) {
    res.render('contact');
});
app.get('/about', function(req, res) {
    res.render('about');
});
app.get('/portfolio', function(req, res) {
    res.render('portfolio');
});

app.listen(process.env.PORT || 5000, () => {
    console.log('web dev server running...');
});

