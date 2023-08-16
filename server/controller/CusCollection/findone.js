const express = require('express');
const router = express();
const Customer = require('../../model/customerschema.js');



//nested path
// router.get('/:id/:service', async(req, res) => {
//     res.json({
//         requestparam: req.params,
//         requestQuery: req.query
//     });
// });


//find customer by ID from database
router.get('/:id', async(req, res) => {
    console.log({
        requestparam: req.params,
        requestQuery: req.query
    });
    try {
        const { id: customerid } = req.params;
        const customer = await Customer.findById(customerid);
        console.log({ customer });
        if (!customer) {
            res.status(404).json({ error: 'Not found!' })
        }
        res.json({ customer });
    } catch (e) {
        res.status(500).json({ error: 'Somthing when wrong!' })
    }

});


module.exports = router;