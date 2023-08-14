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
// app.use(express.json);


app.use('/home', home);
app.use('/api', api);
// const customer = new Customer({
//     name: "minea",
//     //Date: 2023 08 - 14,
//     Service: "visa",
//     Expire: '2023-08-16',
//     Payment: 150.5
// });
//customer.save();

//show customer 
app.get('/customer', async(req, res) => {
    try {
        const customer = await Customer.find()
        res.send({ "Customers": customer });
    } catch (e) {
        res.status(500).json({ error: e.message })
    }

});

//post request to save 
app.post('/customer', (req, res) => {
    //show in console
    console.log(req.body);
    //create varible
    const customer = new Customer({
        name: req.body.name,
        Date: req.body.Date,
        Service: req.body.Service,
        Expire: req.body.Expire,
        Payment: req.body.Payment
    });
    customer.save();
    res.status(200).json({ customer });
});


//Database connection
db.connect(MONGO_URL)
    .then(() => {
        console.log('connected!');
        app.listen(port, () => {
            console.log(`this app run on port ${port}`);
        })
    }).catch(err => { console.log(err); });

// app.listen(PORT, (req, res) => { console.log(`This app listen to port: ${PORT}`); });