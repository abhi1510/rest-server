var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');

var port = 3000;
var app = express();


var dishRouter = require('./routes/dishes');
var Dishes = require('./models/dishes');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected correctly to server");
});

app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/dishes', dishRouter);

app.listen(port, function(){
	console.log('Server started at localhost '+port);
});