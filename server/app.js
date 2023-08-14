require('dotenv').config();
const express = require('express');
const app = express();
const home = require('./router/home.js');
const db = require('mongoose');
const api = require('./router/api.js');
const Customer = require('./model/Customer.js');

const port = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

//middleware
app.use(express.json);


app.use('/home', home);
app.use('/api', api);
// const customer = new Customer({
//     name: "Minea ",
//     Date: '2023-08-14',
//     Service: "visa",
//     Expire: '2023-08-16'
// });
// //customer.save();
// app.get('/customer/:name', (req, res) => {
//     res.send(req.params)
// })

//Database connection
db.connect(MONGO_URL)
    .then(() => {
        console.log('connected!');
        app.listen(port, () => {
            console.log(`this app run on port ${port}`);
        })
    }).catch(err => { console.log(err); });

// app.listen(PORT, (req, res) => { console.log(`This app listen to port: ${PORT}`); });