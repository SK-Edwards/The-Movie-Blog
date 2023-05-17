const router = require("express").Router();
const movies = require("./movies.js");
const users = require("./users");
const home = require("./home.js");

// homepage route
router.use("/home", home);
// localhost:4001/movies
router.use("/movies", movies);

//localhost:4001/
router.use("/", users);

// users route

module.exports = router;
