const router = require("express").Router();
const movies = require("./movies.js");
const users = require("./users");

// homepage route

// localhost:4001/movies
router.use("/movies", movies);

//localhost:4001/
router.use("/", users);

// users route

module.exports = router;
