const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');

mongoose.connect(keys.mongoURI);

//App Config
app.use(bodyParser.urlencoded({extended:true}));


//Session Config
app.use(require('express-session')({
  secret: "cat session",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//Passport Config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Routes
app.get('/',(req,res) => {
  return res.send('Hello backend');
});

//register route
app.post('/register',(req,res) => {
  const newUser = new User({username: req.body.username});
  User.register(newUser,req.body.password,(err,user) => {
    if(err){
      console.log(err);
      res.redirect('/getregister');
    }
    passport.authenticate('local')(req,res,() => {
    res.redirect('/');
    });
  });
});

//login route
app.post('/login',passport.authenticate('local',{
  successRedirect:'/',
  failureRedirect:'/getlogin'
}),(req,res)=>{});

//logout route
app.get('/logout',(req,res) => {
  req.logout();
  res.redirect('/')
});

//api current user route
app.get('/api/current_user',(req,res) => {
  res.send(req.user);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
