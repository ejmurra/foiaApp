var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var passport = require('passport')
var session = require('express-session')
var router = express.Router()
var key = 'thisisascretkey'

router.use(express.static(__dirname + '/../assets'))

router.use(cookieParser());
router.use(bodyParser.json({ extended: true }));

router.use(session({ secret: key }));
router.use(passport.initialize());
router.use(passport.session());

// Sessions
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


router.get('/', function (req, res) {
  res.sendfile('layouts/requests.html')
})

module.exports = router
