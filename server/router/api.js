const express = require('express');
//const Customer = require('../model/Customer.js')
const router = express();

//middleware
//router.use(express.json);

router.get('/', (req, res) => {
    res.send('hii')
});
// async function send() {
//     try {
//         const customer = new Customer({
//             name: "Minea ",
//             Date: '2023-08-14',
//             Service: "visa",
//             Expire: '2023-08-16'
//         })
//         await customer.save();
//         console.log(customer);
//     } catch {
//         (err) => console.log(err.massage);
//     }
// }





module.exports = router;