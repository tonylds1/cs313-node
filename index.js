const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const $ = require('jquery');

//Database Postgres
// const pool = require('./connection');

const personService = require('./services/personService')();
const heroService = require('./services/heroService')();

const personRouter = require('./routes/personRouter')(express, personService);
const heroRouter = require('./routes/heroRouter')(express, heroService);


express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/person', personRouter)
  .use('/hero', heroRouter)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
