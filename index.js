const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000
const $ = require('jquery');

let session = require('express-session')

//Database Postgres
// const pool = require('./connection');

const personService = require('./services/personService')();
const heroService = require('./services/heroService')();
const accountService = require('./services/accountService')();

const personRouter = require('./routes/personRouter')(express, personService);
const heroRouter = require('./routes/heroRouter')(express, heroService);
const accountRouter = require('./routes/accountRouter')(express, accountService);

app.use(session({
    secret: 'heroes-crossover!',
    resave: false,
    saveUninitialized: true
}))

app
    .use(express.json() )
    .use(express.urlencoded({ extended: true }))
    .use(express.static(path.join(__dirname, 'public')))
    .use('/account', accountRouter)
    .use('/person', personRouter)
    .use('/hero', heroRouter)
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
