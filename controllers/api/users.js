var User = require('../../models/user')
var router = require('express').Router()
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' })
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' })
      }
      return done(null, user)
    })
  }
))

router.get('/api/users', function (req, res, next) {
  res.json({
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
  })
})

router.post('/api/users', function (req, res) {
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
    console.log("new user")
  })
})
