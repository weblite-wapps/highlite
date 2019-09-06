<template  >
  <v-app>
    <div class="app">
      <div class="content">
        <CustomizeToolbar />
        <AppBar :save="update" />
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
import { save, fetch, update } from './helpers/requestHandler'
import { mapState, mapMutations } from 'vuex'
import { eventBus } from './components/bus'
import { setInitialData } from './helpers/typesUtils'
import webliteApi from './helpers/weblite.api'
const { W } = window
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
    W && webliteApi(this)
    this.fetch()
  },
  methods: {
    update() {
      update(this.wisId, this.title, JSON.stringify(this.content)).then(res =>
        console.log(res),
      )
    },

    handleFetch(data) {
      if (data) {
        eventBus.$emit(setInitialData, data)
      } else {
        save(this.wisId, this.userId)
      }
    },

    fetch() {
      fetch(this.wisId).then(res => this.handleFetch(res))
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