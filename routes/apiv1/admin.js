"use strict";

var express = require('express');
var router = express.Router();

var auth = require('../../lib/authBasic');

router.use(auth('admin', '12345'));

router.get('/', function (req, res, next) {
   res.json({success: true, text: 'zona de admin'});
});


module.exports = router;