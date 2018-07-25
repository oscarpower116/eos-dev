"use strict";

var router = require('express').Router();
var common = require('../../common');


router.put('/resetGetLimit',(req, res) => {
    var data = req.body;
    common.limits.getData.resetKey(req.connection.remoteAddress);
    res.send(common.responses.ok());
})


module.exports = router