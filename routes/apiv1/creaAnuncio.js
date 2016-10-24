"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');

// Muestra el listado de anuncios que hay en la db, los filtra, los ordena, etc.
router.get('/', function (req, res, next) {
    // filtrado por propiedades del objeto anuncio
    var nombre = req.query.nombre;
    var venta = req.query.venta;
    var precio = req.query.precio;
    var tags = req.query.tags;

    // filtrado por el tipo de consulta
    var sort = req.query.sort || null;
    var limit = parseInt(req.query.limit) || null;
    var skip = parseInt(req.query.skip) || 0;

    var filter = {};

    if (typeof nombre !== 'undefined'){
        filter.nombre = nombre;
    }

    if (typeof venta !== 'undefined'){
        filter.venta = venta;
    }

    if (typeof precio !== 'undefined'){
        filter.precio = precio;
    }

    if (typeof tags !== 'undefined'){
        filter.tags = tags;
    }

    Anuncio.list(filter, sort, limit, skip, function (err, anuncios) {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true, anuncios: anuncios});
    });
});

// Añade anuncios a la db
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

// Actualiza un anuncio
router.put('/:id', function (req, res, next) {

    var id = req.params.id;

    Anuncio.update({_id: id}, req.body, function (err, result) {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true, anuncio: result});
    })
});

// Elimina un anuncio
router.delete('/:id', function (req, res, next) {

    var id = req.params.id;

    Anuncio.remove({_id: id}, function (err, result) {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true, anuncio: result})
    })
});

module.exports = router;
