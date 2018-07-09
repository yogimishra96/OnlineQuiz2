const express = require('express');
const path = require ('path');
const bodyParser= require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

//Connect to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database' +config.database);
});

//on error
mongoose.connection.on('error',(err)=>{
    console.log('Database Error' +err);
});

const app = express();

//CORS Middleware
app.use(cors());

//body-parser Middleware
app.use(bodyParser.json());

//Passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(express.static(path.join(__dirname,'public')));

//Routes
const users = require('./app/routes/user')
app.use('/users',users);


//port number
const port = 8000;
app.listen(port, () =>{
    console.log('Running on port 8000');
})

