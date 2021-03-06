"use strict";

var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.Promise = global.Promise;

db.on('Error!', console.log.bind(console));

db.once('open', function () {
   console.log('Conectado a la db de Nodepop.');
});

mongoose.connect('mongodb://localhost:27017/nodepop');