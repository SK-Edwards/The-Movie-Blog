const express = require('express'); // import express

const routes = require('./controllers'); // import controllers

const app = express();
const PORT = 4001 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for post requests

// localhost:4001/
app.use('/', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // start the server