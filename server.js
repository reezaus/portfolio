//server.js
const express = require('express');
const router = express.Router
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')

//mongo connection
const uri = require('./config/keys.js').mongoURI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to MongoDB'))

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/", function (req, res) {
  console.log('here in post')
  console.log(req.body)
  return res.send("Hi")
})

app.listen(port);

