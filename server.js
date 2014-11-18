var express = require('express')
var bodyParser = require('body-parser')
var Request = require('./models/request')


var app = express()
app.use(bodyParser.json())
app.use(require('./auth'))
app.use('/api/requests', require('./controllers/api/requests'))
app.use('/', require('./controllers/static'))
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))
app.use('/logout', require('./controllers/api/logout'))


var server = app.listen(3000, function () {
  console.log('Server listening on', 3000)
})

server
