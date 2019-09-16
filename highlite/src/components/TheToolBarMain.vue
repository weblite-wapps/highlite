<template>
  <div class="toolbar-wrapper">
    <div class="toolbar-container">
      <ToolBarButton
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
import ToolBarButton from './ToolBarButton'
export default {
  components: {
    ToolBarButton,
  },
  props: {
    tools: Array,
  },
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