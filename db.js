var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/foiaApp', function () {
  console.log('connected to database')
})
module.exports = mongoose
