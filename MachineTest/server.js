const express = require("express")
    , cors = require("cors")
    , passport = require('passport')
    , db = require("./app/models/index")
    , passportUtil = require('./lib/PassportUtil')
    , app = express();

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

db.sequelize.sync()
    .then(() => {
        console.log("Drop and re-sync db.");
    })
    .catch(function (error) {
        console.log(error);
    });

require("./app/routes/userRoute")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});