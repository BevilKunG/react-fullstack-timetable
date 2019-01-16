const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const Course = require('./models/Course');

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

//create course route
app.post('/courses',(req,res) => {
  let days = [];
  if(req.body.sunday === 'on') days.push('sunday');
  if(req.body.monday === 'on') days.push('monday');
  if(req.body.tuesday === 'on') days.push('tuesday');
  if(req.body.wednesday === 'on') days.push('wednesday');
  if(req.body.thursday === 'on') days.push('thursday');
  if(req.body.friday === 'on') days.push('friday');
  if(req.body.saturday === 'on') days.push('saturday');

  const time1 = req.body.timeStart
  const timeStart = time1.split('').splice(0,2).join('') + time1.split('').splice(3,2).join('');

  const time2 = req.body.timeEnd
  const timeEnd = time2.split('').splice(0,2).join('') + time2.split('').splice(3,2).join('');


  const newCourse = new Course({
    name:req.body.name,
    timeStart:timeStart,
    timeEnd:timeEnd,
    days:days,
    place:req.body.place,
    instructor:req.body.instructor,
    author:req.user
  });
  newCourse.save();
  res.redirect('/getcourses');
});

//api courses route
app.get('/api/courses',(req,res) => {
  Course.find({author:req.user},(err,courses) => {
    res.send(courses);
  });
});

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
