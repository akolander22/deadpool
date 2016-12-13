var router = require('express').Router();
var path = require('path');
var passport = require('passport');


router.get('/signup', function(req, res) {
			res.render('signup.ejs', { message: req.flash('loginMessage') });
		});

		// process the signup form
		router.post('/register', passport.authenticate('local-signup', {
			successRedirect : '/profile', // redirect to the secure profile section
			failureRedirect : '/register', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}));
