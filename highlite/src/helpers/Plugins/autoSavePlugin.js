import debounce from 'debounce'

export default store => {
  const updateData = debounce(function() {
    store.dispatch('update')
  }, 300)

  store.subscribe(mutation => {
    if (
      mutation.type === 'setEditorDatas' ||
      mutation.type === 'setNoteTitle'
    ) {
      updateData()
    }
  })
}
