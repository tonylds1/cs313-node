function personRouter (express, personService) {
    var router = express.Router();

    router.get('/', (req, res, next) => {
        return personService.listAll( (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }

            return res.status(200).send(result);
        });
    });

    router.get('/:id', (req, res, next) => {
        return personService.getPerson(req.params.id, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }

            return res.status(200).send(result);
        });
    });

    return router;
}

module.exports = personRouter