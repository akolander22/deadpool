var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
// var show = require('./show').schema;


var SALT_WORK_FACTOR = 10;

//establishes user is username and password, required unique username
var UserSchema = new Schema({

  local : {
   username: { type: String, required: true, index: { unique: true } },
   password: { type: String, required: true },
  //  shows: [show], required: false
  },
  google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
  }
});



//saves the password to database after hashing
UserSchema.pre('save', function(next){
  var user = this;
  if(user.isModified('password') == false){
    return next();
  };
  bcrypt.hash(user.password, SALT_WORK_FACTOR, function(err, hash){
    if(err){
      console.log(err);
    }
    console.log('Hashed Password', hash);
    user.password = hash;
    return next();
  });

})

//compares password in data base to entered password to allow access
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    var user = this;

    bcrypt.compare(candidatePassword, user.password, function(err, isMatch){
      if(err){
        console.log(err);
        cb(err, isMatch);
      } else {
      // console.log('isMatch', isMatch);
      cb(null, isMatch);
    };
  })
};

module.exports = mongoose.model('User', UserSchema);

// // define the schema for our user model
// var userSchema = mongoose.Schema({
//
//     local            : {
//         email        : String,
//         password     : String,
//     },
//     facebook         : {
//         id           : String,
//         token        : String,
//         email        : String,
//         name         : String
//     },
//     google           : {
//         id           : String,
//         token        : String,
//         email        : String,
//         name         : String
//     }
//
// });
//
// // methods ======================
// // generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
//
// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };
//
// // create the model for users and expose it to our app
// module.exports = mongoose.model('User', userSchema);
