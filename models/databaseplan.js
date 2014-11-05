
// User
{
  username : { type: String, required: true },
  password : { type: String, required: true, select: false },
  personal : {
    // Contact info for request
    name : { type: String, required: true},
    address : {
      lineOne : { type: String },
      lineTwo : { type: String }
      city : { type: String },
      state : { type: String },
      postal : { type: String }
    },
    email : { type: String, required: true },
    organization : { type: String, required: true },
    position : { type: String, required: true }
  }
}

// Requests
{
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
  }
  mail : {
    from : { type: String, default: 'FoiaFiler'},
    to : { type: String, required: true },
    subject : { type: String, required: true },
    text : { type: String, required: true },
    html : { type: String }
  }
}
