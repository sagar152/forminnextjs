
!(function () {
    'use strict'
    const passport = require('passport')
        , _ = require("underscore")
        , LocalStrategy = require('passport-local').Strategy
        , Auth = require('./AuthUtil')
        , Model = require("../app/models")
        , UserModel = Model.users

    passport.use('signup', new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'email'
    },
        function (req, email, password, done) {
            let bodyParam = req.body
                , findOrCreateUser = async function () {
                    email = email.toLowerCase();
                    let user = await UserModel.findOne({
                        where: { 'email': email }
                    })
                    if (user) {
                        let err = new Error('User already exist.');
                        err.status = 403;
                        return done(err);
                    } else {
                        Auth.hashPassword(password, async function (err, userPassword) {
                            if (err) {
                                return done(err);
                            } else {
                                let userData = _.extend({
                                    name: bodyParam.name,
                                    email: bodyParam.email,
                                    password: userPassword,
                                })

                                let userModelData = await UserModel.create(userData)
                                if (userModelData && userModelData.id) {
                                    return done(null, userModelData);

                                } else {
                                    let err = new Error('Unable to create user.');
                                    err.status = 403;
                                    return done(err);
                                }
                            }
                        });
                    }

                };
            process.nextTick(findOrCreateUser);
        })
    );

})();