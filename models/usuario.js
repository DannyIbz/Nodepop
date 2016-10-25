"use strict";

var mongoose = require('mongoose');

// Modelo para los usuarios
var usuarioSchema = mongoose.Schema({
    nombre: String,
    email: String,
    clave: String,
});

mongoose.model('Usuario', usuarioSchema);