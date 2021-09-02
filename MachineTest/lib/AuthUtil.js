
!(function () {
    'use strict'
    const bcrypt = require('bcrypt-nodejs')
        , Models = require('../app/models')
        , UserModel = Models.users

    let Auth = {
        hashPassword: function (password, callback) {
            bcrypt.hash(password, null, null, callback);
        }
    };
    module.exports = Auth;
})();