const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost/react_fullstack_timetable');

app.get('/',(req,res) => {
  return res.send('Hello backend');
});

app.listen(3000);
