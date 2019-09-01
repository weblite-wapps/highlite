<template>
  <div>
    <ToolBarMain />
    <ToolBarColors />
    <ToolBarHeading />
    <v-divider></v-divider>
  </div>
</template>

<script>
import ToolBarMain from './TheToolBarMain'
import ToolBarColors from './TheToolBarColors'
import ToolBarHeading from './TheToolBarHeading'
export default {
  components: {
    ToolBarMain,
    ToolBarColors,
    ToolBarHeading,
  },
  data: () => ({}),
  props: {},
}
</script>

<style  scoped>
</style>