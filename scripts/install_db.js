"use strict";

require('../lib/mongoConnection');
require('../models/anuncio');

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');


// Borra la DB
Anuncio.deleteAll(function (err) {
    if (err) {
        next(err);
        return;
    }
    console.log('Base de datos borrada.');
});


// Carga lista de anuncios predefinidos del archivo anuncios.json a la DB
var listaAnuncios = require('../lib/listaAnuncios');

listaAnuncios(function (err, anuncios) {
    if (err) {
         console.log(err);
         next(err);
         return;
     }
console.log(anuncios);
});


// Carga un usuario admin
/*var auth = require('../lib/authBasic');

router.use(auth('admin', '12345'));

router.get('/', function (req, res, next) {
    res.json({success: true, text: 'zona de admin'});
});*/
