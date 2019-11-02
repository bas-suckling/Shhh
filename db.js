const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

function createNewUser(user, db = database) {
    return db('users').insert(user)
}


// function validUser(user, db = database) {
//    
   
//     return db()
// }

module.exports = {
    createNewUser
}