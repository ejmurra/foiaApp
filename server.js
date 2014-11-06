var express    = require('express')
var logger     = require('morgan')

var app = express()

app.use(logger('dev'))
app.use(require('./controllers'))


app.listen(3000, function () {
  console.log('Server listening on', 3000)
})
