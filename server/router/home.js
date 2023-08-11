const express = require('express');
const router = express();



router.get('/', (req, res) => {
    res.send('hiiii');
})

module.exports = router;