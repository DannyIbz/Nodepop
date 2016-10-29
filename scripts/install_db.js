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

    // Carga lista de anuncios predefinidos del archivo anuncios.json a la DB
    var listaAnuncios = require('../lib/listaAnuncios');

    listaAnuncios(function (err, anuncios) {
        if (err) {
            console.log(err);
            next(err);
            return;
        }

        console.log(anuncios);

        var anuncio = new Anuncio();

        anuncio.save(function (err, anuncios) {
            if (err){
                next(err);
                return;
            }

            for (var i = 0; i < anuncios.length; i++ ){
                var anuncio = rows[i];
                console.log(anuncio.nombre, anuncio.venta, anuncio.precio, anuncio.foto, anuncio.tags);
            }

            console.log(anuncios);
        });

        console.log('Lista de anuncios añadida a la DB.');
    });

});






// Carga un usuario admin
/*var auth = require('../lib/authBasic');

router.use(auth('admin', '12345'));

router.get('/', function (req, res, next) {
    res.json({success: true, text: 'zona de admin'});
});*/
