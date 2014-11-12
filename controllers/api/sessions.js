var router = require('express').Router()
var User = require('../../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')

router.post('/', function (req, res, next) {
  User.findOne({ email: req.body.email })
  .select('password').select('email').select('username')
  .exec(function (err, user) {
    if (err) { return next(err) }
    if (!user) { return console.log('no user') }
    bcrypt.compare(req.body.password, user.password, function (err, valid) {
      if (err) { return next(err) }
      if (!valid) { return console.log('no pass match') }
      var token = jwt.encode({ email: user.email, username: user.username }, config.secret)
      res.send(token)
    })
  })
})
module.exports = router
