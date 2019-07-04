pool = require('./connection').getPool()

const express = require('express');
var router = express.Router();

router.get('/person/:id', function(req, res, next) {
    pool.query('SELECT * FROM taw10.person WHERE id = $1', [req.params.id], function(err, result) {
        done();
        if (err) {
            return console.error('error running query', err);
        }
        res.send(result);
    });
});

module.exports = router