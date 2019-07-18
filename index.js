const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const $ = require('jquery');

//Database Postgres
// const pool = require('./connection');

const personService = require('./services/personService')();
const personRouter = require('./routes/personRouter')(express, personService);


express()
  .use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
    .use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))
    .use('/js', express.static(__dirname + '/node_modules/jquery/dist/js'))
  .use(express.static(path.join(__dirname, 'public')))
  // .use('/person', personRouter)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
