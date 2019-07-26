function AccountService() {
    const db = require('../db');

    this.findByPower = (powers, callback) => {
        console.log(powers);

        let sql = 'select h.* ' +
        'from heroes.hero h ' +
        'join heroes.hero_power as hp on hp.hero_id = h.id ' +
        'join heroes.power p on p.id = hp.power_id ' +
        'where lower(p.ds_description) similar to \'%\(' +
        powers.join('|') +
        '\)%\'';
console.log(sql);
        db.query(sql, [],  (err, result) => {
            if (err) {
                return callback(err, undefined);
            }

            return callback(undefined, result.rows);
        });
    };

    return this;
}

module.exports = AccountService;
