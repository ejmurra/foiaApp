var router = require('express').Router()
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var User = require('../../models/user')
var config = require('../../config')

router.get('/', function (req, res, next) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401)
  }
  var auth = jwt.decode(req.headers['x-auth'], config.secret)
  User.findOne({ email: auth.email }, function (err, user) {
    if (err) { return next(err) }
    res.json(user)
  })
})

router.post('/', function (req, res, next) {
  var user = new User({
    email: req.body.email,
    nameFirst: req.body.nameFirst,
    nameLast: req.body.nameLast,
    username: req.body.nameFirst + ' ' + req.body.nameLast,
    addressLineOne: req.body.addressOne,
    addressLineTwo: req.body.addressTwo,
    city: req.body.city,
    state: req.body.state,
    postal: req.body.postal,
    organization: req.body.organization,
    position: req.body.position
  })
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) { return next(err) }
    user.password = hash
    user.save(function (err) {
      if (err) { return next(err) }
      res.sendStatus(201)
    })
  })
})

module.exports = router
