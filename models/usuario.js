"use strict";

var mongoose = require('mongoose');

// Modelo para los usuarios
var usuarioSchema = mongoose.Schema({
    nombre: String,
    email: String,
    clave: String,
});

usuarioSchema.statics.list = function (filter, sort, limit, skip, callBack) {
    var query = usuario.find(filter);

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

var usuario = mongoose.model('Usuario', usuarioSchema);