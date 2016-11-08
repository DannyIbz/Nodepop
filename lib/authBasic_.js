"use strict";

var basicAuth = require('basic-auth');
var listaUsuarios = require('../lib/listaUsuarios');

function auth(username, userpass) {
    return function (req, res, next) {
        let credenciales = basicAuth(req);

        //comprobamos si nos han dado credenciales para entrar
        if (!credenciales) return pideAuth();

        // cargamos la lista de usuarios
        listaUsuarios(function(err, data) {
            if (err) return next(err);

            const listaUsers = data.usuario;

            // buscamos el usuario en el array con el método find de los arrays (https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find)
            let user = listaUsers.find((u) => { return u.nombre === credenciales.name; });

            // comprobamos si no hemos encontrado el usuario
            if (!user) return pideAuth();

            // comprobamos si la contraseña es diferente
            if (credenciales.pass !== user.pass) return pideAuth();

            // si todo es correcto le dejamos pasar
            next();
        });

        function pideAuth() {
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            res.send(401);
        }

    };
}

module.exports = auth;
