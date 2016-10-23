"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var anuncio = mongoose.model('anuncio');

router.post('/', function (req, res) {

    var Anuncio = new anuncio(req.body);

    Anuncio.save(function (err, anuncioSaved) {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true, anuncio: anuncioSaved});
    });
});

module.exports = router;