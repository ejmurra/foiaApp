var db = require('../db')
var Request = db.model('Request', {
  parentUser: {  type: String, required: true },
  date: { type: Date, default: Date.now },
  response: { type: Boolean, default: false },
  to: { type: String, required: true },
  subject: { type: String, required: true },
  text: { type: String, required: true },
  html: { type: String },
  responseText: { type: String },
  attachment: { type: String }
})
module.exports = Request
