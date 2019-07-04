require('dotenv').config()
const { Pool } = require('pg')

const connectionString = process.env.DATABASE_URL
const getPool = function() {
    return new Pool({connectionString: connectionString});
}

module.exports = {
    getPool
}