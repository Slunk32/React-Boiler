import express from 'express';
const bodyParser = require('body-parser');
require('dotenv').config();

process.on('unhandledRejection', err => { throw err; });


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.all('*', function(req, res) {
	res.render('layout');
});

app.listen((process.env.PORT || 8000), function() {
	console.log('Server Online');
});
