var db = require('../db')
var User = db.model('User', {
  username : { type: String, required: true, unique: true },
  password : { type: String, required: true, select: false },
  personal : {
    // Contact info for request
    name : { type: String, required: true},
    address : {
      lineOne : { type: String, required: true},
      lineTwo : { type: String, required: true},
      city : { type: String, required: true},
      state : { type: String, required: true},
      postal : { type: String, required: true}
    },
    email : { type: String, required: true, unique: true },
    organization : { type: String, required: true },
    position : { type: String, required: true }
  }
})

module.exports = User
