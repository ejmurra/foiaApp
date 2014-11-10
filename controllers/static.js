var express = require('express')
var router = require('express').Router()
var path = require('path')

router.use(express.static(path.resolve('./assets')))

router.get('/', function (req, res) {
  var basePath = path.resolve
  res.sendFile(path.resolve('./layouts/main.html'))
})

module.exports = router
