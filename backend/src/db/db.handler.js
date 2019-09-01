const { db } = require('./db')

// const wisId = 'w1'
// const userId = 'u1'
// const text = 't1'
// const content = 'c1'

const saveNote = async ({ wisId, userId, text, content }) =>
  await db.run(
    `INSERT INTO note(wisId, userId, text, content) VALUES('${wisId}', '${userId}', '${text}', '${content}')`,
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
      `select text text, content content  from note where wisId = '${wisId}'`,
      (err, row) => {
        if (err) {
          console.error(err.message)
        }
        resolve(row)
      },
    )
  })
}

// db.each('select * from note', (err, row) => {
//   console.log(row)
// })

module.exports = {
  saveNote,
  fetchNote,
}
