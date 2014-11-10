var Request = require('../../models/request')
var router = require('express').Router()

router.get('/', function (req, res, next) {
  Request.find()
  .sort('-date')
  .exec(function(err, posts) {
    if (err) { return next(err) }
    res.json(requests)
  })
})

router.post('/', function (req, res) {
  var request = new Request({
    parentUser : req.name,
    date : Date.now,
    response : {
      replied : false,
      reply : {
        headers : null,
        subject : null,
        references : null,
        inReplyTo : null,
        text : null,
        date : null,
        attachments : null
      }
    },
    mail : {
      from : "foiafiler@illinimedia.com",
      to : req.body.to,
      subject : req.body.subject,
      text : req.request.foia,
      html : null
    }
  })
  request.save(function (err, post) {
    if (err) { return next(err) }
    res.Status(201).json(request)
  })
})

module.exports = router
