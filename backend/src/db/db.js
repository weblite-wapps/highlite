// import sqlite
const sqlite3 = require('sqlite3')

// connection to db
let db = new sqlite3.Database(
  './data.db',
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  err => {
    if (err) {
      return console.error(err.message)
    }
    console.log('Connected to the in-memory SQlite database.')
  },
)

db.run(`INSERT INTO notes(title) VALUES(?)`, ['C'], function(err) {
  if (err) {
    return console.log(err.message)
  }
  // get the last insert id
  console.log(`A row has been inserted with rowid ${this.lastID}`)
})

db.close(err => {
  if (err) {
    return console.error(err.message)
  }
  console.log('Close the database connection.')
})
