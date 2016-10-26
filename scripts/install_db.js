"use strict";

require('../lib/mongoConnection');
require('../models/anuncio');

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');

Anuncio.deleteAll(function (err) {
    if (err) {
        next(err);
        return;
    }
    console.log('Base de datos borrada.');
});

