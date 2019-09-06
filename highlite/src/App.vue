<template  >
  <v-app>
    <div class="app">
      <div class="content">
        <CustomizeToolbar />
        <AppBar :save="save" />
        <!-- <ToolBar /> -->
        <Editor />
        <Drawer />
      </div>
    </div>
  </v-app>
</template>


<script>
// <Drawer />
import AppBar from './components/TheAppBar'
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
    Drawer,
    Editor,
    CustomizeToolbar,
  },
  data: () => ({}),
  computed: mapState(['wisId', 'userId', 'title', 'content']),
  created() {
    this.fetch()
  },
  methods: {
    save() {
      save(
        this.wisId,
        this.userId,
        this.title,
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
  width: 100%;
  height: 100vh;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid red;
  opacity: 1;
}

.content {
  margin: 0px 10px 0px 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>