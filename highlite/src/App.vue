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
// <Drawer />
import debounce from 'debounce'
import AppBar from './components/TheAppBar'
import Drawer from './components/TheDrawer'
import Editor from './components/TheEditor'
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
  computed: {
    ...mapState(['wisId', 'userId', 'title', 'content', 'isLoading']),
    noteData() {
      return this.title + JSON.stringify(this.content)
    },
  },
  created() {
    W && webliteApi(this)
    !W && this.fetch()
  },
  methods: {
    ...mapMutations(['setIsLoading']),
    update() {
      update(
        this.wisId,
        this.title ? this.title : 'untitled',
        JSON.stringify(this.content),
      ).then(res => {
        this.setIsLoading(false)
        // console.log(res)
      })
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
  watch: {
    noteData: debounce(function() {
      this.update()
    }, 300),
    wisId() {
      this.fetch()
    },
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