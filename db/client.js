const pg = require('pg')
require('dotenv').config()
const client = new pg.Client({
    host: process.env.DATABASE_URL,
    port: process.env.AWS_PORT,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
})
//console.log(process.env.DATABASE_URL, process.env.AWS_PORT, process.env.DATABASE, process.env.DB_USER, process.env.PASSWORD)

module.exports = client 