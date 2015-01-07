var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var server = app.listen(3000, function () {
  console.log('Server listening on', 3000)
})

app.use(bodyParser.json())
app.use(require('./auth'))

//Send Angular App
app.use(require('./controllers/static'))

// API Routes
app.use('/api/requests', require('./controllers/api/requests'))
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))

require('./websockets').connect(server)
