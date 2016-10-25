"use strict";

require('../lib/mongoConnection');

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');

router.delete('/', function (req, res, next) {
    var remove = req.query.remove || null;
    var filter = {};

    Anuncio.deleteAll(filter, remove, function (err, anuncios) {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true, anuncios: anuncios});
    });
});

