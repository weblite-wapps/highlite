import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wisId: '',
    userId: '',
    toggleablePanel: 'closed',
    // allowed values are: {closed, color-panel, heading-panel, link-panel}

    drawerIsOpen: false,
    content: null,
    customizeArray: [
      { title: 'Header', able: true },
      { title: 'Bold', able: true },
      { title: 'Italic', able: true },
      { title: 'Underline', able: true },
      { title: 'Color', able: true },
      { title: 'Bullet', able: true },
      // { title: 'Link', able: true },
      // { title: 'Table', able: false },
      // { title: 'Image', able: false },
      { title: 'undo', able: true },
      { title: 'redo', able: true },
    ],
    customizeIsOpen: false,
    title: 'undefined',
    isLoading: false,
  },
  mutations: {
    togglePanelTo(state, panel) {
      if(state.toggleablePanel == panel) // when targeted panel is already open
        return state.toggleablePanel = 'closed'
      state.toggleablePanel = panel
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
    changeWebliteRelatedData(state, { wisId, userId }) {
      state.wisId = wisId
      state.userId = userId
    },
    setIsLoading(state, value) {
      state.isLoading = value
    },
  },

  actions: {},
})
