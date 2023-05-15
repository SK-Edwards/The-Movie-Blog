const router = require('express').Router();
const movies = require('./movies.js');

// homepage route

// localhost:4001/movies
router.use('/movies', movies);

// users route

module.exports = router;