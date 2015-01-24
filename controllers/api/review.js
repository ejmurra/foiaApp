var Request = require('../../models/request')
var router = require('express').Router()
var websockets = require('../../websockets')

router.get('/', function (req, res, next) {
  res.redirect('../request')
})

router.post('/', function (req, res, next) {
  var request = new Request({
    username: req.body.username,
    subject: req.body.subject,
    toEmail: req.body.toEmail,
    replied: req.body.replied,
    request: req.body.request,
    response: req.body.response,
    attachment: req.body.attachment,
    needsReview: false,
    id: req.body._id
  })
  var updateData = request.toObject()
  delete updateData._id
  request.update({ _id: request.id}, updateData, {}, function (err, request) {
    if (err) { return next(err) }
    websockets.broadcast('new_request', request)
    res.status(201).json(request)
  })
})

module.exports = router
