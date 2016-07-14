import express from 'express';
const bodyParser = require('body-parser');
require('dotenv').config();

process.on('unhandledRejection', err => { throw err; });


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.all('*', function(req, res) {
	console.log(req);
	res.render('layout');
});

app.listen((process.env.PORT || 8000), function() {
	console.log('Server Online');
});
