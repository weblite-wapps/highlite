// import sqlite
const sqlite3 = require('sqlite3')

// connection to db
const db = new sqlite3.Database(
  './data.db',
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  err => {
    if (err) {
      return console.error(err.message)
    }
    console.log('Connected to the in-memory SQlite database.')
  },
)

// db.run('drop table note', (err, message) => {})
// db.run('CREATE TABLE note(wisId, userId, text, content)')

// db.close(err => {
//   if (err) {
//     return console.error(err.message)
//   }
//   console.log('Close the database connection.')
// })

module.exports = { db }
