const express = require('express'); // import express
const sequelize = require('./config/connection');

const app = express();
const PORT = 4001 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for post requests

// localhost:4001/
app.use('/', routes);

 // start the server
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })