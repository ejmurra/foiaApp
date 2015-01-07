var router = require('express').Router()
var User = require('../../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')

router.post('/', function (req, res, next) {
  User.findOne({ email: req.body.email })
  .select('password').select('username')
  .exec(function (err, user) {
    if (err) { return next(err) }
    if (!user) {
      console.log('no user')
      return res.sendStatus(401)
    }
    bcrypt.compare(req.body.password, user.password, function (err, valid) {
      if (err) { return next(err) }
      if (!valid) {
        console.log('invalid')
        return res.sendStatus(401) }
      var token = jwt.encode({username: user.username}, config.secret)
      res.send(token)
    })
  })
})
module.exports = router
