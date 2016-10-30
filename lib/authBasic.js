"use strict";

var basicAuth = require('basic-auth');
var Users = require('../lib/listaUsuarios');

function auth(username, userpass) {
    return function (req, res, next) {
        var user =  basicAuth(req);
        var nombre = Users.nombre;
        var pass = Users.pass;

        //comprobamos si el usuario y contraseña son correctos y lo validamos
        if (!user || nombre !== username || pass !== userpass) {
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            res.send(401);
            return;
        }
        next();
        //res.json({success: true, text: 'Usuario correcto'});
        console.log('Usuario conectado');
    };
}

module.exports = auth;





