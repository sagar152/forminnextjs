!(function () {
    'use strict'
    const passport = require('passport')
        , db = require('../models/index')
        , OP = db.Sequelize.Op
        , Model = require("../models")
        , UserModel = Model.users

    let UserController = {

        // Create and Save a new User
        signupUser: async function (req, res, next) {
            try {
                passport.authenticate('signup', function (err, user, info) {
                    if (err) {
                        return next(err);
                    } else {
                        if (user) {
                            res.json({
                                data: user,
                                message: 'Registered Successfully.'
                            })

                        } else {
                            let err = new Error('User not registered.');
                            err.status = 403;
                            return next(err);
                        }
                    }
                })(req, res, next);
            } catch (error) {

            }
        },

        // Retrieve all Users from the database.
        getAllUsers: async function (req, res, next) {
            try {

                const queryData = req.query
                let condition = queryData ? { name: { [OP.like]: '%' + queryData.search + '%' } } : null;

                let allUsers = await UserModel.findAndCountAll(
                    {
                        where: condition
                    }
                )

                res.json({
                    data: allUsers.rows.length > 0 ? allUsers.rows : [],
                    messgae: allUsers.rows.length > 0 ? 'Users find successfully' : 'Data not found'
                })

            } catch (error) {
                return next(error);
            }
        },

        // Find a single User with an id
        getUserById: async function (req, res, next) {
            try {

                const paramData = req.params

                let condition = paramData ? { id: paramData.id } : null;

                let userData = await UserModel.findOne(
                    {
                        where: condition
                    }
                )

                res.json({
                    data: userData ? userData.get({ plain: true }) : [],
                    messgae: userData ? 'User find successfully' : 'Data not found'
                })

            } catch (error) {
                return next(error);
            }
        },

        // Update a User by the id in the request
        updateUser: async function (req, res, next) {
            try {
                const paramData = req.params
                const bodyData = req.body
                let condition = paramData ? { id: paramData.id } : null;

                let userData = await UserModel.update(bodyData, {
                    where: condition
                })

                if (userData == 1) {
                    res.json({
                        data: null,
                        messgae: 'User updated successfully'
                    })
                } else {
                    res.json({
                        data: null,
                        message: `Cannot update User with id = ${paramData.id}. Maybe User was not found!`
                    })
                }


            } catch (error) {
                return next(error);

            }
        },

        // Delete a User with the specified id in the request
        deleteUser: async function (req, res, next) {
            try {
                const paramData = req.params;
                let condition = paramData ? { id: paramData.id } : null;

                let userData = await UserModel.destroy({
                    where: condition
                })

                if (userData == 1) {
                    res.json({
                        data: null,
                        messgae: 'User has been deleted.'
                    })
                } else {
                    res.json({
                        data: null,
                        message: `Cannot delete User with id = ${paramData.id}. Maybe User was not found!`
                    })
                }


            } catch (error) {
                return next(error);
            }
        },

        // Delete all Users from the database.
        deleteAllUsers: async function (req, res, next) {
            try {

                let userData = await UserModel.destroy({
                    where: {},
                    truncate: false
                });

                if (userData && userData > 0) {
                    res.json({
                        data: null,
                        messgae: 'All users has been deleted.'
                    })
                } else {
                    res.json({
                        data: null,
                        messgae: 'All users has been deleted.'
                    })
                }


            } catch (error) {
                return next(error);
            }
        }
    }

    module.exports = UserController
})();