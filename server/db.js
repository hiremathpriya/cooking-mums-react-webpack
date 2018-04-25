const winston = require('winston')
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

winston.level = 'debug'

module.exports = {
  saveUser: saveUser,
  getImages: getImages
}

function saveUser (user) {
  console.log(user)
  console.log('db js config is ', config)
  console.log('db js connection is ', connection)
  
  const userToInsert = {name: user.name, email: user.email};

  return connection('users').insert(userToInsert).returning('id').then((id) => {

      console.log('db js the user added to db with id', id);
      return id;
  }).catch(err => console.log('error saving user to db', err));
    
}

function getImages() {
  winston.info('getting images from db in env ' + environment);

  /*
  return connection('images').select().catch((err) => {
    console.log('error occured while getting images', err)
  });
  */

  return connection.select().table('images').then(imagesArray => {

    winston.info('The images array returned is', imagesArray);
    return imagesArray
  })
}
  
  