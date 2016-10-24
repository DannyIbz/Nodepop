"use strict";

var mongoose = require('mongoose');

// Modelo para los anuncios
var anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

// Modelo para los usuarios
var usuarioSchema = mongoose.Schema({
    nombre: String,
    email: String,
    clave: String,
});

anuncioSchema.statics.list = function (filter, sort, limit, skip, callBack) {
    var query = Anuncio.find(filter);

    query.sort(sort);
    query.limit(limit);
    query.skip(skip);
    query.exec(function (err, anuncios) {
        if(err){
            callBack(err);
            return;
        }
        callBack(null, anuncios);
    });
};

var Anuncio = mongoose.model('Anuncio', anuncioSchema);
mongoose.model('Usuario', usuarioSchema);
