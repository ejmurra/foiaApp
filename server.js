var express = require('express')
var bodyParser = require('body-parser')
var Request = require('./models/request')

var app = express()
app.use(bodyParser.json())

app.get('/api/requests', function (req, res, next) {
  Request.find(function(err, requests) {
    if (err) { return next(err) }
    res.status(201).json(requests)
  })
})

app.post('/api/requests', function (req, res, next) {
  var request = new Request({
    parentUser: 'dickeyxxx', //req.user.username
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
    console.log('saved')
    console.log(parentUser)
  })
})

app.listen(3000, function () {
  console.log('Server listening on', 3000)
})
