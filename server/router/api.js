const express = require('express');
const Customer = require('../model/Customer.js')
const router = express();

//middleware
router.use(express.json);

const customer = new Customer[{
    name: "Minea ",
    Date: '2023-08-14',
    Service: "visa",
    Expire: '2023-08-16'
}]

router.get('/', (req, res) => {
    res.send({ "Customer": customer })
})

module.exports = router;