const express = require('express');
const app = express();
const home = require('./router/home.js');
const db = require('mongoose')




app.use('/home', home);


db.connect('mongodb+srv://admin:m190399n@devdestop.zcizub3.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('connected!');
        app.listen(3000, () => {
            console.log('this app run on port 3000');
        })
    }).catch(err => { console.log(err); })