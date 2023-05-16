const express = require('express'); // import express
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const options = require('./seed')

const app = express();
const PORT = 4001 || process.env.PORT;

const hbs = exphbs.create({ helpers })

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for post requests


// localhost:4001/
app.use('/', routes);

 // start the server
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })