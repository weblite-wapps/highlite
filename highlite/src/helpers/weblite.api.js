// W
const { W } = window
// console.log('wisId ', W.wisId)
const handleNormalMode = (start, vue) => {
  W.loadData().then(data => {
    const {
      user: { userId },
    } = data

    vue.$store.commit('changeWebliteRelatedData', {
      wisId: W.wisId,
      userId: userId,
    })
    start()
  })
}

export default vue => {
  W.setHooks({
    wappWillStart(start) {
      handleNormalMode(start, vue)
    },
  })
}
