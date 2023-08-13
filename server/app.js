const express = require('express');
const app = express();
const home = require('./router/home.js');
const db = require('mongoose');
const api = require('./router/api.js')


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const PORT = process.env.PORT || 3001;
const CONNECTION = process.env.CONNECTION;


app.use('/home', home);
app.use('/api', api);

// app.listen(PORT, (req, res) => { console.log(`This app listen to port: ${PORT}`); });

//Database connection
db.connect(CONNECTION)
    .then(() => {
        console.log('connected!');
        app.listen(3000, () => {
            console.log('this app run on port 3000');
        })
    }).catch(err => { console.log(err); })