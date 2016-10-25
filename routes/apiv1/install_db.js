"use strict";

var express = require('express');
var router = express.Router;

var mongoose = require('mongoose');
var borraAnuncio = mongoose.model('Anuncio');

borraAnuncio.statics.deleteAll = function (callBack) {
  Anuncio.remove({}, function (err) {
     if (err) {
         return next(err);
     }
     callBack(null);
  });
};

module.exports = router;