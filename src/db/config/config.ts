const config = {
  development: {
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: 'test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
}
module.exports = config
