const router = require('express').Router();
const { Movie, Comment } = require('../models');


router.get('/', async(req,res) => {
  res.render('home')
});



module.exports = router; 
