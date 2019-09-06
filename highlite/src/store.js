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
    content: null,
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
    title: '',
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
    setEditorDatas(state, content) {
      state.content = content
    },
    setCustomizeArray(state, arr) {
      state.customizeArray = arr
    },
    setCustomizeIsOpen(state, value) {
      state.customizeIsOpen = value
    },
    setNoteTitle(state, title) {
      state.title = title
    },
  },

  actions: {},
})
