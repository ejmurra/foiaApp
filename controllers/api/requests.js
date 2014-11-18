var Request = require('../../models/request')
var router = require('express').Router()
var User = require('../../models/user')

router.get('/', function (req, res, next) {
  Request.find()
  .sort('-date')
  .exec(function(err, requests) {
    if (err) { return next(err) }
    res.status(201).json(requests)
  })
})

router.post('/', function (req, res, next) {
  req.user = User.findOne({ username: req.auth.username })
  console.log(req.user)

  var request = new Request({
    parentUser: 'username',
    response: false,
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text,
    html: null,
    responseText: null,
    attachment: null,
    mail: req.body.mail
  })
  request.parentUser = req.auth.username
  request.save(function (err, request) {
    if (err) { return next(err) }
    res.status(201).json(request)
  })
})

module.exports = router
