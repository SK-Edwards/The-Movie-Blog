const router = require('express').Router();
const { User, Movie, Comment } = require('../models');


router.get('/', async(req,res) => {
    res.render('movie-list')



});




module.exports = router; 