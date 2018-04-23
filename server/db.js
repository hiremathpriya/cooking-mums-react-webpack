const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    saveUser: saveUser
  }
  
  function saveUser (user) {
    console.log(user)
    console.log('db js config is ', config)
    console.log('db js connection is ', connection)
    return connection('users').insert(user).returning('id').then((id) => {

        console.log('db js the user added to db with id', id);
        return id;
    });
     
  }
  
  