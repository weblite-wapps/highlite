module.exports = ({ router }) => {
  router.post('/', (ctx, next) => {
    console.log('hello')
    // console.log(ctx)
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    console.log(next)
    ctx.body = 'HELLO WORLD BOYS'
  })
}
