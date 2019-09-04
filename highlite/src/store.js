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
    customizeArray: [
      { title: 'Header', able: true },
      { title: 'Bold', able: true },
      { title: 'Italic', able: true },
      { title: 'Underline', able: true },
      { title: 'Color', able: true },
      { title: 'Bullet', able: true },
      { title: 'Link', able: true },
      { title: 'Table', able: false },
      { title: 'Image', able: false },
    ],
    customizeIsOpen: false,
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
      console.log('drawer changed')
      state.drawerIsOpen = !state.drawerIsOpen
    },
    updateCursorPosition(state, { index, length }) {
      state.editorRange = { index, length }
    },
    setEditorFormats(state, formats) {
      state.editorFormats = formats
    },
    setEditorDatas(state, data) {
      state.text = data.text
      state.content = data.content
    },
    setCustomizeArray(state, arr) {
      state.customizeArray = arr
    },
    setCustomizeIsOpen(state, value) {
      state.customizeIsOpen = value
    },
  },

  actions: {},
})
