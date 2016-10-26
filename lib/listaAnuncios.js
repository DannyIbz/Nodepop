"use strict";

var fs = require('fs');

var listaAnuncios = function (callBack) {

    // Calculamos la ruta al fichero
    var fichero = '/anuncios.json';

    fs.readFile(fichero, 'utf-8', function (err, data) {
        if (err) {
            console.log('Error!', err);
            return;
        }

        // Convertimos el json a objeto
        var packageJson = JSON.parse(data);

        // Llamamos al callback con los datos del JSON
        callBack(null, packageJson);
    });

};

module.exports = listaAnuncios;
