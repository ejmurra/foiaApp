var express = require('express')
var router = require('express').Router()
var path = require('path')

//Send HTML Layout
router.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname+'/../layouts/app.html'))
})

//Send Angular Code
router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))


module.exports = router
