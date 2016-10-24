"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');

router.post('/', function(req, res) {

    var anuncio = new Anuncio(req.body);

    anuncio.save(function (err, anuncioSaved) {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true, anuncio: anuncioSaved});
    });
});

module.exports = router;
