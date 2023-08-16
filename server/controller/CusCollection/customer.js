const express = require('express');
const router = express();
const Customer = require('../../model/customerschema.js');


// const customer = new Customer({
//     name: 'makra',
//     Date: '2023-08-14',
//     Service: 'visa',
//     Expire: '2023-08-16',
//     Payment: 150.5
// });
// customer.save();

//show customer 
router.get('/', async(req, res) => {
    try {
        const customer = await Customer.find()
        res.send({ "Customers": customer });
    } catch (e) {
        res.status(500).json({ error: "Somhing when wrong!" })
    }

});

//post request to save 
router.post('/', async(req, res) => {
    //show in console
    console.log(req.body);
    //create varible
    const customer = new Customer(req.body);
    try {
        await customer.save();
        res.status(201).json({ customer });
    } catch (e) { res.status(400).json({ error: e.message }) }
});

module.exports = router;