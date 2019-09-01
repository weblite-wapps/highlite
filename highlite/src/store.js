import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wisId: 'wis1',
    userId: 'user1',
    colorPanelIsOpen: false,
    hedingPanelIsOpen: false,
    drawerIsOpen: false,
    text: '',
    content: null,
    editorRange: {},
    editorFormats: {},
  },
  mutations: {
    toggleColorPanel(state) {
      state.colorPanelIsOpen = !state.colorPanelIsOpen
    },
    toggleHeadingPanel(state) {
      state.hedingPanelIsOpen = !state.hedingPanelIsOpen
    },
    toggleDrawer(state) {
      state.drawerIsOpen = !state.drawerIsOpen
    },
    updateCursorPosition(state, { index, length }) {
      state.editorRange = { index, length }
    },
    setEditorFormats(state, formats) {
      state.editorFormats = formats
    },
    setEditorDatas(state, data) {
      // console.log('data', data)
      // console.log('11', data.text)
      // console.log('22', data.content)
      state.text = data.text
      state.content = data.content
    },
  },

  actions: {},
})
