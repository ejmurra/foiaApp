
// User
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false},
  username: { type: String, required: true },
  nameFirst: { type: String, required: true },
  nameLast: { type: String, required: true },
  addressLineOne: { type: String },
  addressLineTwo: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postal: { type: String, required: true },
  organization: { type: String, required: true },
  position: { type: String, required: true }
}

// Requests
{
  parentUser: {  type: String, required: true },
  date: { type: Date, default: Date.now },
  response: { type: Boolean, default: false },
  to: { type: String, required: true },
  subject: { type: String, required: true },
  text: { type: String, required: true },
  html: { type: String },
  responseText: { type: String },
  attachment: { type: String }
}
