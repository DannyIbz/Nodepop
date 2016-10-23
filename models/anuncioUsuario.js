"use strict";

var mongoose = require('mongoose');

// Esquema para los anuncios
var anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

// Esquema para los usuarios
var usuarioSchema = mongoose.Schema({
    nombre: String,
    email: String,
    clave: String,
});

mongoose.model('Anuncio', anuncioSchema);
mongoose.model('Usuario', usuarioSchema);
