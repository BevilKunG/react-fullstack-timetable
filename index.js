const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');

mongoose.connect('mongodb://localhost/react_fullstack_timetable');

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

app.post('/submit',(req,res) => {
  // console.log(req.body);
  res.redirect('/');
})


app.listen(3000);
