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

anuncioSchema.statics.deleteAll = function (callBack) {
    Borradb.remove({}, function (err) {
        if (err) {
            return callBack(err);
        }
        callBack(null);
    });
};

var Anuncio = mongoose.model('Anuncio', anuncioSchema);
var Borradb = mongoose.model('Anuncios', anuncioSchema);

