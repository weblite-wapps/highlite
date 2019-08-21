const koa = require('koa')
const app = new koa()

// app.context.db = db()
app.use(async ctx => {
  ctx.body = 'Hello World'
})

app.listen(3000)
