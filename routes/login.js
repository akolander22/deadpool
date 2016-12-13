var router = require('express').Router();
var path = require('path');
var passport = require('passport');



router.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile.html', {
    user : req.user
  });
});

// LOGOUT ==============================
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
