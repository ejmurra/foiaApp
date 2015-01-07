var Request = require('../../models/request')
var router = require('express').Router()

router.get('/', function (req, res, next) {
  res.redirect('/')
})

module.exports = router
