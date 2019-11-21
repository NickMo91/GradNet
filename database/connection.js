const { Pool } = require('pg')
const config = require('../config')

const pool = new Pool({
  host: config.dbHost,
  user: config.dbUsername,
  database: config.dbName,
  password: config.dbPassword,
  port: config.dbPort
})

module.exports = pool;