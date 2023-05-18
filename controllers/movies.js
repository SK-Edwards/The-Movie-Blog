const router = require("express").Router();
const { User, Movie, Comment } = require("../models");

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
  const commentData = await Movie.findByPk(req.params.id, {
    include: [{ model: Comment }],
  });

  if (!commentData) {
    res.status(404).json("Cannot find movie by that id!");
  }

  console.log(commentData);
  res.render("movie-info", commentData);
});

// post request for comments

router.post('/:id', (req, res) => {
    const userId = req.session.userId;
    const movieId = req.params.id;
    console.log(req.body);
    console.log(movieId);
    console.log(userId);
    const commentData = Comment.create({
        "content": req.body.commentBox,
        "user_id": userId,
        "movie_id": movieId
    },
    {
      include: [{ model: User }, { model: Movie }],
    }
  );

  res.status(200).json(commentData);
});

module.exports = router;
