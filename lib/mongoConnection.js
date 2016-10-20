"use strict";

var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('Error!', console.log.bind(console));

db.once('open', function () {
   console.log('Conectado a la db de Nodeapi.');
});

mongoose.connect('mongodb://localhost:27017/cursonode');