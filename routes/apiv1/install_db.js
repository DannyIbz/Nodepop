"use strict";

var express = require('express');
var router = express.Router;

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncios');

router.delete('/', function (req, res, next) {
    Anuncio.deleteAll(function (err, anuncios) {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true, anuncios: anuncios});
    });
});

module.exports = router;