<template  >
  <v-app class="app">
    <v-content class="content">
      <CustomizeToolbar />
      <AppBar :save="save" />
      <ToolBar />
      <Editor />
      <Drawer />
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
import CustomizeToolbar from './components/TheCustomizeToolbar'
import store from './store'
import { save, fetch } from './helpers/requestHandler'
import { mapState, mapMutations } from 'vuex'
import { eventBus } from './components/bus'
import { setInitialData } from './helpers/typesUtils'
export default {
  name: 'App',
  store,
  components: {
    AppBar,
    ToolBar,
    Drawer,
    Editor,
    CustomizeToolbar,
  },
  data: () => ({}),
  computed: mapState(['wisId', 'userId', 'text', 'content', 'drawerIsOpen']),
  created() {
    this.fetch()
  },
  methods: {
    save() {
      save(
        this.wisId,
        this.userId,
        this.text,
        JSON.stringify(this.content),
      ).then(res => console.log(res))
    },
    fetch() {
      fetch(this.wisId).then(res => eventBus.$emit(setInitialData, res))
    },
  },
}
</script>




<style  scoped>
.app {
  top: 0px;
  left: 0px;
  width: 375px;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid red;
  opacity: 1;
}

.content {
  margin-left: 18px;
}
</style>