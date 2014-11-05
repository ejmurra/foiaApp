var express = require('express')
var bodyParser = require('body-parser')
var User = require('./models/user')

var app = express()
app.use(bodyParser.json())

app.get('/api/users', function (req, res) {
  res.json([
    {
      username : "test",
      password : "pass",
      personal : {
        // Contact info for request
        name : "Bob Tester",
        address : {
          lineOne : "555 W Washington Rd.",
          lineTwo : "Apt: #9",
          city : "Urbana",
          state : "Illinois",
          postal : "82412"
        },
        email : "this@that.com",
        organization : "The Daily Illini",
        position : "Reporter"
      }
    }
  ])
})

app.post('/api/users', function (req, res) {
  var user = new User({
    username : req.body.username,
    password : req.body.password,
    personal : {
      // Contact info for request
      name : req.body.name,
      address : {
        lineOne : req.body.lineOne,
        lineTwo : req.body.lineTwo,
        city : req.body.city,
        state : req.body.state,
        postal : req.body.postal
      },
      email : req.body.email,
      organization : req.body.org,
      position : req.body.pos
    }
  })
  user.save(function (err, user) {
    if (err) { return next(err) }
    res.sendStatus(201).json(user)
  })
})

app.listen(3000, function () {
  console.log('Server listening on', 3000)
})
