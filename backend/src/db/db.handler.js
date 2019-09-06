const { db } = require('./db')

const saveNote = async ({ wisId, userId, title, content }) =>
  await db.run(
    `INSERT INTO note(wisId, userId, title, content) VALUES('${wisId}', '${userId}', '${title}', '${content}')`,
    function(err) {
      if (err) {
        return console.log(err.message)
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`)
    },
  )

const fetchNote = ({ wisId }) => {
  return new Promise(resolve => {
    db.get(
      `select title title, content content from note where wisId = '${wisId}'`,
      (err, row) => {
        if (err) {
          console.error(err.message)
        }
        resolve(row)
      },
    )
  })
}

module.exports = {
  saveNote,
  fetchNote,
}
