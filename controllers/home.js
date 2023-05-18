const router = require('express').Router();
const {User, Movie, Comment } = require('../models');


router.get('/', async(req,res) => {
  res.render('home')
});

// router.get('/', async (req, res) => {
//   const movieData = await Movie.findAll().catch((err) => { 
//       res.json(err);
//     });
//       const movies= movieData.map((movie) => movie.get({ plain: true }));
//       res.render('home', { movies });
//     });



module.exports = router; 
