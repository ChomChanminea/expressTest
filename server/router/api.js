const express = require('express');
const router = express();

const customer = [{
    "name": "Minea",
    "age": 24,
    "gender": "male"
}, {
    "name": "myfuture",
    "age": 20,
    "gender": "female"
}, {
    "name": "luffy",
    "age": 22,
    "gender": "male"
}]

router.get('/', (req, res) => {
    res.send({ "data": customer })
})

module.exports = router;