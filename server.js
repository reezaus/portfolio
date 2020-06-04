//server.js
const express = require('express');
const connectDB = require('./config/db');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const app = express();
// Connect Database
if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https')
  res.redirect(`https://${req.header('host')}${req.url}`);
  else
  next()
  })
  }
connectDB();
app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/api/contact', require('./routes/api/contact'));

app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port);

