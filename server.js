var express = require('express')
var bodyParser = require('body-parser')
var Request = require('./models/request')

var app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/layouts/main.html')
})

app.get('/api/requests', function (req, res, next) {
  Request.find()
  .sort('-date')
  .exec(function(err, requests) {
    if (err) { return next(err) }
    res.status(201).json(requests)
  })
})

app.post('/api/requests', function (req, res, next) {
  var request = new Request({
    parentUser: req.body.parentUser, //req.user.username
    response: false,
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text,
    html: null,
    responseText: null,
    attachment: null
  })
  request.save(function (err, request) {
    if (err) { return next(err) }
    console.log('saved request ' + req.body.subject)
  })
})

app.listen(3000, function () {
  console.log('Server listening on', 3000)
})
