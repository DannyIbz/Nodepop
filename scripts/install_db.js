"use strict";

var mongoConnection = require('./lib/mongoConnection');

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

