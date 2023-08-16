const express = require('express');
const router = express();
const Customer = require('../model/customerschema.js');



//nested path
router.get('/:id/:service', async(req, res) => {
    res.json({
        requestparam: req.params,
        requestQuery: req.query
    });
});


module.exports = router;