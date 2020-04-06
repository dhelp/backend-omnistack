// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'mysql5019.site4now.net',
      user : 'a4c915_react',
      password : 'react0000',
      database : 'db_a4c915_react'
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      diretory: '/migrations',
      tableName: 'knex_migrations'
    }
    // client: 'sqlite3',
    // connection: {
    //   filename: './src/database/sb.sqlite'
    // },
    // migrations: {
    //   diretory: './src/database/migrations'
    // },
    // useNullAsDefault: true,
  },

  staging: {
    client: 'mssql',
    connection: {
      host : 'sql5045.site4now.net',
      user : 'DB_A4C915_react_admin',
      password : 'react0000',
      database : 'DB_A4C915_react',
      options: {
        "encrypt": false,
        "enableArithAbort": true
    }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      diretory: '/migrations',
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
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
  }

};
