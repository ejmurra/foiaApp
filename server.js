var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/api/requests', function (req, res) {
  res.json([
    {
      name: 'Eli Murray',
      request: 'Link 2 Obj',
      response: false,
      timestamp: '10:45 am'
    }
  ])
})

app.post('/api/requests', function (req, res) {
  console.log('request received')
  console.log(req.body.name)
  console.log(req.body.request)
  console.log(req.body.response)
  console.log(req.body.timestamp)
  res.sendStatus(201)
})

app.listen(3000, function () {
  console.log('Server listening on', 3000)
})
