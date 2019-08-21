import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colorPanelIsOpen: false,
    hedingPanelIsOpen: false,
    drawerIsOpen: false,
    editorText: '',
    editorContent: null,
    editorRange: {},
    event: '',
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
    addEvent(state, type) {
      state.event = type
      // TODO : THIS IS DANGEROUS IT MIGHT BE SOONER THAN THE WATCHER FOR EVENT TO WORK
      setTimeout(() => {
        state.event = ''
      }, 500)
    },
    setEditorFormats(state, formats) {
      state.editorFormats = formats
    },
  },

  actions: {},
})
