const router = require("express").Router();
const { Movie, Comment } = require("../models");

//my second attempt (parisa)
//localhost:4001/movies
router.get("/", async (req, res) => {
  const user = req.session.fullName;
  const movieData = await Movie.findAll();
  let moviePosts = movieData.map((post) => post.get({ plain: true }));
  res.render("movielist", { moviePosts, user });
});

// localhost:4001/movies/:id
router.get("/:id", async (req, res) => {
  // get comments from db
  const movieData = await Movie.findByPk(req.params.id);

  console.log(movieData);

  res.render("movie-info");
});

// post request for comments

router.post('/:id', async (req, res) => {
    let movieId = Movie.findByPk(req.params.id);
    let userId = req.query.userId;
    console.log(movieId);
    console.log(userId);
    const commentData = await Comment.create({
        "content": req.body.commentBox,
        "user_id": userId,
        "movie_id": movieId
    }
  );

  res.status(200).json(commentData);
});

module.exports = router;
