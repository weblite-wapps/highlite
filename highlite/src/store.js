import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wisId: 'wis1',
    userId: 'user1',
    colorPanelIsOpen: false,
    linkPanelIsOpen: false,
    headingPanelIsOpen: false,
    drawerIsOpen: false,
    text: '',
    content: null,
    editorRange: {},
    editorFormats: {},
  },
  mutations: {
    toggleColorPanel(state) {
      state.linkPanelIsOpen = false
      state.headingPanelIsOpen = false
      state.colorPanelIsOpen = !state.colorPanelIsOpen
    },
    toggleLinkPanel(state) {
      state.colorPanelIsOpen = false
      state.headingPanelIsOpen = false
      state.linkPanelIsOpen = !state.linkPanelIsOpen
    },
    toggleHeadingPanel(state) {
      state.colorPanelIsOpen = false
      state.linkPanelIsOpen = false
      state.headingPanelIsOpen = !state.headingPanelIsOpen
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
