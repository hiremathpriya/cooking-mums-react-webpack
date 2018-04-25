// Update with your config settings.

const DB_URL = 'postgres://mnzajkxbxgejmf:00ab79a39f6e4b4dfef28f3fe3909cf027e3e43bfd8e1c254a74777886b34388@ec2-54-83-204-6.compute-1.amazonaws.com:5432/dlstbfbldq0f8?ssl=true'

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'cooking-mums'
    },
    debug: true
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host : 'ec2-54-83-204-6.compute-1.amazonaws.com',
      database: 'dlstbfbldq0f8',
      user:     'mnzajkxbxgejmf',
      password: '00ab79a39f6e4b4dfef28f3fe3909cf027e3e43bfd8e1c254a74777886b34388'

    },
    //connection: DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    debug: true,
    ssl: true
  }

};
