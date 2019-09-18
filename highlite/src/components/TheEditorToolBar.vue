<template>
  <div class="toolbar-wrapper">
    <div class="toolbar-container">
      <BaseButton
        v-for="(tool, index) in tools"
        :class="{ 'active': tool.active() }"
        @click="tool.command"
        :image-src="tool.imageSrc"
        :inner-color="tool.innerColor"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import getTools from '../helpers/editorToolsHandler.js'
export default {
  props: {
    editor: Object,
  },
  computed: {
    ...mapState(['customizeArray']),
    tools(){
      return getTools(this.editor, this.togglePanelTo, this.customizeArray)
    }
  },
  methods: mapMutations(['togglePanelTo']),
}
</script>

<style scoped>
.toolbar-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-content: left;
  margin: 0px auto;
  max-width: 500px;
  overflow-y: hidden;
  overflow-x: hidden;
}

@media only screen and (max-width: 300px) {
  .toolbar-container {
    overflow-y: hidden;
    overflow-x: scroll;
  }
}

@media only screen and (min-width: 300px) and (max-width: 329px) {
  .toolbar-container {
    overflow-x: hidden;
  }
}
@media only screen and (min-width: 330px) {
  .toolbar-container {
    justify-content: space-around;
  }
}
</style>