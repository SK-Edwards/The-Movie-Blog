const express = require('express'); // import express

const app = express();
const PORT = 4001 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for post requests

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // start the server