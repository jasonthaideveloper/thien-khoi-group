//const { application } = require('express');
//const { compile } = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('PATH', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home', { showTitle: true });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})