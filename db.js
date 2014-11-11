var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/foiaFiler', function () {
  console.log('connected')
})
module.exports = mongoose
