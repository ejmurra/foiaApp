var db = require('../db')
var Request = db.model('Request', {
  username: { type: String, required: true },
  subject: { type: String, required: true },
  toEmail: { type: String, required: true },
  date: { type: Date, default: Date.now },
  replied: { type: Boolean, required: true },
  request: { type: String, required: true },
  response: { type: String },
  attachment: { type: String },
  needsReview: { type: Boolean, required: true }
})
module.exports = Request
