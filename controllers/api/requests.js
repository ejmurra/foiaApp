var Request = require('../../models/request')
var router = require('express').Router()
var websockets = require('../../websockets')

router.get('/', function (req, res, next) {
  Request.find()
  .sort('-date')
  .exec(function(err, requests) {
    if (err) {return next(err) }
    res.json(requests)
  })
})

router.post('/', function (req, res, next) {
  var request = new Request({
    username: req.auth.username,
    subject: req.body.subject,
    toEmail: req.body.toEmail,
    replied: false,
    request: req.body.requestFull,
    response: 'awaiting response',
    attachment: 'no attachment'
  })
  request.save(function (err, request) {
    if (err) { return next(err) }
    websockets.broadcast('new_request', request)
    res.status(201).json(request)
  })
})
module.exports = router
