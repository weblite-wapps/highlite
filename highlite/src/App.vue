<template>
  <v-app>
    <v-content>
      <AppBar />
      <ToolBar />
      <Editor />
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
  methods: {},
}
</script>



