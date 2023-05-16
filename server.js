const express = require('express'); // import express
const sequelize = require('./config/connection');
const options = require('./seed')

const app = express();
const PORT = 4001 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for post requests

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=86f7076724c94fafc14a27c7cc8941e0").then((data) => {
  console.log(data);
    console.log(data.json());
})

// localhost:4001/
app.use('/', routes);

 // start the server
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })