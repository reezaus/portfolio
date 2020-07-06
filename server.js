//server.js
const express = require('express');
const connectDB = require('./config/db');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const sslRedirect = require('heroku-ssl-redirect');
const app = express();
// Connect Database
connectDB();
app.use(sslRedirect());
app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/api/contact', require('./routes/api/contact'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port);

