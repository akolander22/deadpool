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

router.get('/register', function(req, res) {
			res.render('register.html', { message: req.flash('loginMessage') });
		});

// process the signup form
router.post('/register', passport.authenticate('local-signup', {
	successRedirect : '/profile', // redirect to the secure profile section
	failureRedirect : '/register', // redirect back to the signup page if there is an error
	failureFlash : true // allow flash messages
}));


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

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}

module.exports = router;
