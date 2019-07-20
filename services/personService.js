function PersonService() {
    const db = require('../db');

    this.listAll = (callback) => {
        let sql = 'SELECT ' +
            '(person.first_name || \' \' || person.last_name) as name, person.birth, ' +
            '(f.first_name || \' \' || f.last_name) as father, ' +
            '(m.first_name || \' \' || m.last_name) as mother ' +
            'FROM migration.person person ' +
            'left join migration.person m on m.id = person.mother ' +
            'left join migration.person f on f.id = person.father ';

        db.query(sql, [],  (err, result) => {
            if (err) {
                return callback(err, undefined);
            }

            return callback(undefined, result.rows);
        });
    }

    this.getPerson = (id, callback) => {
        let sql = 'SELECT * FROM migration.person where id = $1';

        db.query(sql, [id],  (err, result) => {
            if (err) {
                return callback(err, undefined);
            }

            return callback(undefined, result.rows);
        });
    }

    return this;
}

module.exports = PersonService;
