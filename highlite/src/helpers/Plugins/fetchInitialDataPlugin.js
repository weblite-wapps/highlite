export default store => {
  function fetchData() {
    store.dispatch('fetch')
  }
  store.subscribe(mutation => {
    if (mutation.type === 'changeWebliteRelatedData') fetchData()
  })
}
