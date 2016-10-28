"use strict";

require('../lib/mongoConnection');
require('../models/anuncio');

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');

var express = require('express');
var router = express.Router();


// Borra la DB
Anuncio.deleteAll(function (err) {
    if (err) {
        next(err);
        return;
    }
    console.log('Base de datos borrada.');
});


// Carga lista de anuncios predefinidos del archivo anuncios.json a la DB
router.get('/', function (req, res) {
    var listaAnuncios = require('../lib/listaAnuncios');

    listaAnuncios(function (err, anuncios) {
        if (err) {
            console.log(err);
            next(err);
            return;
        }

        console.log(anuncios);

        res.render('anuncios', {anuncios: anuncios});
    });
});


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