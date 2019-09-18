<template  >
  <v-app style="height: 100%;">
    <div class="app">
      <div class="content">
        <CustomizeToolbar />
        <AppBar />
        <Editor />
        <Drawer />
      </div>
    </div>
  </v-app>
</template>

<script>
import AppBar from './components/TheAppBar'
import Drawer from './components/TheDrawer'
import Editor from './components/TheEditor'
import CustomizeToolbar from './components/TheCustomizeToolbar'
import store from './store'
import { mapActions } from 'vuex'
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
  created() {
    W && webliteApi(this)
    !W && this.fetch()
  },
  methods: {
    ...mapActions(['fetch']),
  },
}
</script>

<style  scoped>
.app {
  width: 100%;
  height: 100%;
  min-height: unset;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
}

.content {
  margin: 0px 10px 0px 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>