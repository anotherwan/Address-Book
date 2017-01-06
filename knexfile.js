require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    ssl: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: 'migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: 'seeds'
    },
  },
  production: {
    client: 'pg',
    ssl: true,
    connection: process.env.DATABASE_URL
  }
};
