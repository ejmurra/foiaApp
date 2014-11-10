var Request = require('../../models/request')
var router = require('express').Router()

router.get('/', function (req, res, next) {
  Request.find()
  .sort('-date')
  .exec(function(err, requests) {
    if (err) { return next(err) }
    res.status(201).json(requests)
  })
})

router.post('/', function (req, res, next) {
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

module.exports = router
