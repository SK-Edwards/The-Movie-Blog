const { Movie } = require('../models/Movie');



async function logJSONData() {
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated/?api_key=86f7076724c94fafc14a27c7cc8941e0");
    const jsonData = await response.json();
    console.log(jsonData);
    const movieData = jsonData.results;
    console.log(movieData)

    for(var x = 0; x < movieData.length; x++) {

    const movieTitle = movieData[x].title;
    const movieOverview = movieData[x].overview;
    const moviePoster = movieData[x].poster_path;
    const movieReleaseDate = movieData[x].release_date;
    const rating = movieData[x].vote_average;
    
    console.log([movieTitle, moviePoster, rating, movieReleaseDate, movieOverview])

}
};

logJSONData()


const movieTableData = {

    title: movieTitle,
    movie_info: movieOverview,
    poster: moviePoster,
    star_rating:rating,
    release_date: movieReleaseDate
}

const seedMovies = () => Movie.bulkCreate(movieTableData);



module.exports = seedMovies;