var db = require('../db')
var User = db.model('User', {
  username : { type: String, required: true },
  password : { type: String, required: true, select: false },
  personal : {
    // Contact info for request
    name : { type: String, required: true},
    address : {
      lineOne : { type: String },
      lineTwo : { type: String },
      city : { type: String },
      state : { type: String },
      postal : { type: String }
    },
    email : { type: String, required: true },
    organization : { type: String, required: true },
    position : { type: String, required: true }
  }
})

module.exports = User
