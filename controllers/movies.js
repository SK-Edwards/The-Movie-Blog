const router = require('express').Router();
const { User, Movie, Comment } = require('../models');

// localhost:4001/movies
router.get('/', async (req, res) => {
    const movieData = await Movie.findAll({
        order: [['title', 'ASC']]
    });

    res.render('movie-info', movieData);
});

// localhost:4001/movies/:id
router.get('/:id', async (req, res) => {
    // get comments from db
    const movieData = await Movie.findByPk(req.params.id, {
        include: [{ model: Comment }]
    });

    if (!movieData) {
        res.status(404).json('Cannot find movie by that id!');
    };

    console.log(movieData);
    res.render('movie-info', movieData);
});

// post request for comments
router.post('/:id', (req, res) => {
    console.log(req.params.id);
    const userData = req.session.userId = userData.id
    const commentData = Comment.create({
        ...req.body,
        "user_id": userData,
        "movie_id": req.params.id
    },
    {
        include: [{ model: User }, { model: Movie}]
    });

    res.status(200).json(commentData);
})

module.exports = router;