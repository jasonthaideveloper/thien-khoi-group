//const { application } = require('express');
//const { compile } = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/db');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

// Connect MongoDB
db.connect();

// Template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('PATH', path.join(__dirname, 'resources/views'));

// routes init
routes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})