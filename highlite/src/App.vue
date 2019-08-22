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
import { saveNote } from './helpers/requestHandler'
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
  methods: {
    save() {
      saveNote('This is a temp note ').then(res => console.log(res))
    },
  },
}
</script>



