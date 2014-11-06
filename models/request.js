var db = require('../db')
var Request = db.model('Request', {
  parentUser : { type: String, required: true },
  date : { type: Date, required: true, default: Date.now },
  response : {
    replied : { type: Boolean, required: true, default: false},
    reply : {
      headers : { type: String },
      subject : { type: String, required: true },
      references : [{ type: String }],
      inReplyTo : [{ type: String }],
      text : { type: String, required: true },
      date : { type: Date, required: true },
      attachments : [{ type: Object }]
    }
  },
  mail : {
    from : { type: String, default: 'FoiaFiler'},
    to : { type: String, required: true },
    subject : { type: String, required: true },
    text : { type: String, required: true },
    html : { type: String }
  }
})
module.exports = Request
