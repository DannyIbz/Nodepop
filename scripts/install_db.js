"use strict";

require('../lib/mongoConnection');
require('../models/anuncio');

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');
var lista = require('../anuncios.json');

// Borra la DB
Anuncio.deleteAll(function (err) {
    if (err) {
        next(err);
        return;
    }
    console.log('Base de datos borrada.');
});

router.post('/', function(req, res, next) {

    var anuncio = new Anuncio(req.body);

    anuncio.save(function (err, anuncioSaved) {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true, anuncio: anuncioSaved});
    });
});