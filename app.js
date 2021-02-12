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

app.listen(process.env.PORT || 5000, () => {
    console.log('web dev server running...');
});

