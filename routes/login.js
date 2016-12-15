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


router.get('/', function(request, response){
  response.send(request.isAuthenticated());
});

router.get('/passportSuccess', function(req, res){
  res.sendStatus(200);
});

router.get('/passportFailure', function(req, res){
  res.sendStatus(401);
});


router.post('/', passport.authenticate('local', {
  successRedirect: '/login/passportSuccess',
  failureRedirect: '/login/passportFailure'
}));


module.exports = router;
