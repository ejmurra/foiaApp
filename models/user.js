var db = require('../db')
var user = db.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  username: { type: String, required: true },
  addressLineOne: { type: String, required: true },
  addressLineTwo: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postal: { type: String, required: true },
  organization: { type: String, required: true },
  position: { type: String, required: true },
  phone: { type: String, required: true }
})
module.exports = db.model('User', user)
