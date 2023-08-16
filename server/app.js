require('dotenv').config();
const express = require('express');
const app = express();
const home = require('./controller/home.js');
const db = require('mongoose');
const update = require('./controller/update.js');
const customer = require('./controller/customer.js');
const findone = require('./controller/findone.js')


//process from .env file
const port = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route
app.use('/api/home', home);
app.use('/api/update', update);
app.use('/api/customer', customer);
app.use('/api/findone', findone)

//Database connection
db.connect(MONGO_URL)
    .then(() => {
        console.log('connected!');
        app.listen(port, () => {
            console.log(`this app run on port ${port}`);
        })
    }).catch(err => { console.log(err); });

// app.listen(PORT, (req, res) => { console.log(`This app listen to port: ${PORT}`); });