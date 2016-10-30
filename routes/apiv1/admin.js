"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');

var auth = require('../../lib/authBasic');

router.use(auth());

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


