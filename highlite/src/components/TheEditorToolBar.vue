<template>
  <div class="c--toolbar-container">
    <BaseButton
      v-for="(tool, index) in tools"
      @click="tool.command"
      :isActive="tool.active()"
      :image-src="tool.imageSrc"
      :inner-color="tool.innerColor"
      :key="index"
    />
  </div>
</template>

<script>
//vuex
import { mapState, mapMutations } from 'vuex'
//utils
import getTools from '../helpers/editorToolsHandler.js'
export default {
  props: {
    editor: Object,
  },
  computed: {
    ...mapState(['customizeArray']),
    tools() {
      return getTools(this.editor, this.togglePanelTo, this.customizeArray)
    },
  },
  methods: mapMutations(['togglePanelTo']),
}
</script>

<style>
.c--toolbar-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto 10px;
  width: 100%;
  max-width: 450px;
}
</style>