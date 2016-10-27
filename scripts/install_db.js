"use strict";

require('../lib/mongoConnection');
require('../models/anuncio');

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');

var listaAnuncios = require('../lib/listaAnuncios');
var fs = require('fs');
// instalar async con npm!! <--
var async = require('async');


// Borra la DB
Anuncio.deleteAll(function (err) {
    if (err) {
        next(err);
        return;
    }
    console.log('Base de datos borrada.');
});


// Lee la lista de anuncios predefinidos en el archivo anuncios.json
var listaJSON = function (callBack) {
    var lista = './anuncios.json';

    fs.readdir(lista, function (err, anuncios) {
        if(err){
            callBack(err);
            return;
        }

        async.concat(anuncios, function iterador (module, next) {
                listaJSON(module, function (err, data) {
                    if(err){
                        next(err);
                        return;
                    }
                    next(null, {modulo: module, data: data});
                    return;
                });

            },

            // Callback de async.concat
            function finalizador (err, modulos) {
                callBack(null, modulos);
                return;
            }
        );

    });
};


// Carga datos del JSON en la DB
/*
 router.post('/', function(req, res, next) {

 var anuncio = new Anuncio(req.body);

 anuncio.save(function (err, anuncioSaved) {
 if (err) {
 next(err);
 return;
 }
 res.json({success: true, anuncio: anuncioSaved});
 });
 });*/