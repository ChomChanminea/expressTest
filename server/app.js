require('dotenv').config();
const express = require('express');
const app = express();
const db = require('mongoose');
const update = require('./controller/CusCollection/update.js');
const customer = require('./controller/CusCollection/customer.js');
const findone = require('./controller/CusCollection/findone.js')


//process from .env file
const port = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route
app.get('/', (req, res) => {
    res.send('welecome');
});
app.use('/api/customer', customer);
app.use('/api/findone', findone)
app.use('/api/update', update);

//Database connection
db.connect(MONGO_URL)
    .then(() => {
        console.log('connected!');
        app.listen(port, () => {
            console.log(`this app run on port ${port}`);
        })
    }).catch(err => { console.log(err); });

// app.listen(PORT, (req, res) => { console.log(`This app listen to port: ${PORT}`); });