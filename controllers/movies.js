const router = require('express').Router();
const { Movie } = require('../models');

router.get('/', async (req, res) => {
    const movieData = await Movie.findAll({
        order: [['title', 'ASC']]
    });

    res.render('movie-info', movieData);
});
// localhost:4001/movies/:id
router.get('/:id', (req, res) => {
    res.render('movie-info');
});

// post request for comments

module.exports = router;