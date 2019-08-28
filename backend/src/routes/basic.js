const { saveNote, fetchNote } = require('../db/db.handler')
const bodyParser = require('koa-body')()

module.exports = ({ router }) => {
  router.post('/saveNote', (ctx, next) => {
    // console.log('ctx.request.body', ctx.request.body)
    // console.log('ctx.request.body.text', ctx.request.body.userId)
    // console.log('ctx.request.body.text', typeof ctx.request.body.userId)

    saveNote(ctx.request.body)
    // ctx.body = ctx.request.body.text
  })

  router.get('/fetchNote', (ctx, next) =>
    fetchNote(ctx.query)
      .then(res => {
        console.log(typeof res.content)
        ctx.body = res
      })
      .catch(console.log),
  )
}
