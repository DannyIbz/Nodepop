"use strict";

require('../lib/mongoConnection');
require('../models/anuncio');
require('../models/usuario');

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');
var Usuario = mongoose.model('Usuario');


// Borra la DB de los anuncios y carga una lista desde el json
Anuncio.deleteAll(function (err) {
    if (err) {
        console.log('Error', err);
        return;
    }
    console.log('Base de datos borrada.');

    // Carga lista de anuncios predefinidos del archivo anuncios.json a la DB
    var listaAnuncios = require('../lib/listaAnuncios');

    listaAnuncios(function (err, anuncios) {
        if (err) {
            console.log('Error', err);
            return;
        }

        console.log(anuncios);

        var rows = anuncios.anuncio;

        for (var i = 0; i < rows.length; i++) {
            var anuncio = new Anuncio(rows[i]);

            anuncio.save(function (err, anuncioGuardado) {
                if (err) {
                    console.log('Error', err);
                    return;
                }
                console.log('Anuncio guardado ' + anuncioGuardado._id + ' con nombre ' + anuncioGuardado.nombre);
            });
        }
    });
});

// Borra la DB de usuarios y carga 3 usuarios predefinidos
Usuario.deleteAll(function (err) {
    if (err) {
        console.log('Error', err);
        return;
    }
    console.log('Base de datos borrada.');

    var listaUsuarios = require('../lib/listaUsuarios');

    listaUsuarios(function (err, usuarios) {
        if (err) {
            console.log('Error', err);
            return;
        }

        console.log(usuarios);

        var rows = usuarios.usuario;

        for (var i = 0; i < rows.length; i++) {
            var usuario = new Usuario(rows[i]);

            usuario.save(function (err, userGuardado) {
                if (err) {
                    console.log('Error', err);
                    return;
                }
                console.log('Usuario creado con nombre: ' + userGuardado.nombre);
            });
        }
    });
});

