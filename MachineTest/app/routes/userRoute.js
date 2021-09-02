
!(function () {
    'use strict'
    let router = require("express").Router();
    const UserController = require("../controllers/userController");

    let route = function (app) {

        // Create a new User
        router.post("/signup", UserController.signupUser);

        // Retrieve all Users
        router.get("/getAllUsers", UserController.getAllUsers);

        // Retrieve a single User with id
        router.get("/getUserById/:id", UserController.getUserById);

        // Update a User with id
        router.put("/updateUser/:id", UserController.updateUser);

        // Delete a User with id
        router.delete("/deleteUser/:id", UserController.deleteUser);

        // Create a new User
        router.delete("/deleteAllUsers", UserController.deleteAllUsers);

        app.use('/api/user', router);
    };

    module.exports = route;
})();
