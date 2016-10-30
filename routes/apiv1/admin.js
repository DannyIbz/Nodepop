"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');

var authBasic = require('../../lib/authBasic');
var auth = require('../../lib/listaUsuarios');

router.use('/', function (req, res, next) {
   var nombre = req.nombre;
   var pass = req.pass;
   if (nombre !== auth.nombre || pass !== auth.pass) {
      console.log('Error! Usuario o contraseña incorrecta');
      return next;
   }
   authBasic(nombre, pass);
});

router.get('/', function (req, res, next) {
   res.json({success: true, text: 'zona de admin'});
});

// Método POST para añadir usuarios
router.post('/', function(req, res, next) {

   var usuario = new Usuario(req.body);

   usuario.save(function (err, usuarioSaved) {
      if (err) {
         next(err);
         return;
      }
      res.json({success: true, usuario: usuarioSaved});
   });
});

module.exports = router;