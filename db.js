var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/foiaFiler', function () {
  console.log('Touchdown on the moonbase')
})
module.exports = mongoose
