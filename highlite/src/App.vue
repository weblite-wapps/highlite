<template >
  <v-app>
    <v-content>
      <AppBar />
      <ToolBar />
      <Editor />
      <v-btn @click="save">save</v-btn>
    </v-content>
  </v-app>
</template>


<script>
// <Drawer />
import AppBar from './components/TheAppBar'
import ToolBar from './components/TheToolBar'
import Drawer from './components/TheDrawer'
import Editor from './components/Editor'
import store from './store'
import { save, fetch } from './helpers/requestHandler'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'App',
  store,
  components: {
    AppBar,
    ToolBar,
    Drawer,
    Editor,
  },
  data: () => ({}),
  computed: mapState(['wisId', 'userId', 'text', 'content']),
  created() {
    // this.fetch()
  },
  methods: {
    ...mapMutations(['setEditorDatas']),
    save() {
      save(this.wisId, this.userId, this.text, this.content).then(res =>
        console.log(res),
      )
    },
    fetch() {
      fetch(this.wisId).then(this.setEditorDatas)
    },
  },
}
</script>



