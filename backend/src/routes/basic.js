const { saveNote, fetchNote, updateNote } = require('../db/db.handler')

module.exports = ({ router }) => {
  router.post('/saveNote', ctx => {
    saveNote(ctx.request.body)
      .then(() => (ctx.body = 'success'))
      .catch(console.log)
  })

  router.post('/updateNote', ctx => {
    console.log(ctx.request.body)
    updateNote(ctx.request.body)
      .then(() => (ctx.body = 'success'))
      .catch(console.log)
  })

  router.get('/fetchNote', ctx =>
    fetchNote(ctx.query)
      .then(res => {
        ctx.body = res
      })
      .catch(console.log),
  )
}
