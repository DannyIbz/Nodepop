"use strict";

var basicAuth = require('basic-auth');

function auth(username, userpass) {
    return function (req, res, next) {
        var user =  basicAuth(req);

        //comprobamos si el usuario y contraseña son correctos y lo validamos
        if (!user || user.name !== username || user.pass !== userpass) {
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            res.send(401);
            return;
        }
        next();
    };
}

module.exports = auth;