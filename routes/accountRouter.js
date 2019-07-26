function accountRouter (express, heroService) {
    var router = express.Router();

    router.post('/login', (req, res, next) => {
        let result = {success: false};

        // We should do better error checking here to make sure the parameters are present
        if (req.body.username == "admin" && req.body.password == "password") {
            req.session.user = req.body.username;
            result = {success: true};
        }

        res.json(result);
    });

    router.post('/logout', (req, res, next) => {
        var result = {success: false};

        // We should do better error checking here to make sure the parameters are present
        if (req.session.user) {
            req.session.destroy();
            result = {success: true};
        }

        res.json(result);
    });

    router.get('/me', (req, res, next) => {
        if (req.session.user) {
            next()
        } else {
            let result = {success:false, message: "Access Denied"};
            res.status(401).json(result)
        }
    })

    return router;
}

module.exports = accountRouter