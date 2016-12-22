var router = require('express').Router();
var path = require('path');
var passport = require('passport');

var User = require('../models/user');


router.get('/register', function(req, res) {
			res.render('register.html', { message: req.flash('loginMessage') });
		});

// process the signup form
router.post('/register', passport.authenticate('local-signup', {
	successRedirect : '/profile', // redirect to the secure profile section
	failureRedirect : '/register', // redirect back to the signup page if there is an error
	failureFlash : true // allow flash messages
}));


// router.get('/', function(request, response){
//   response.sendFile(path.join(__dirname, '../public/views/register.html'));
// });
//
//
// router.post('/', function(request, response){
//   console.log('Requested register!!!', new Date());
//   User.create(request.body, function(err){
//     if(err){
//       console.log('HERE', err);
//       response.sendStatus(500);
//     } else {
//       response.redirect('/');
//     }
//   })
// })




module.exports = router;
