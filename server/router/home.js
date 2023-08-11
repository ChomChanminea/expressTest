const express = require('express');
const router = express();



router.get('/', (req, res) => {
    res.send('Welecome');
});

router.post('/', (req, res) => {
    res.send('This is use post method!')
})

module.exports = router;