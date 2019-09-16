<template>
  <div class="toggleable-toolbar">
    <ToolBarColors v-if="toggleablePanel == 'color-panel'" :commands="commands" />
    <ToolBarHeading v-if="toggleablePanel == 'heading-panel'" :commands="commands" />
    <ToolBarLink v-if="toggleablePanel == 'link-panel'" :commands="this.commands" />
  </div>
</template>

<script>
import ToolBarHeading from './TheToolBarHeading'
import ToolBarLink from './TheToolBarLink'
import ToolBarColors from './TheToolBarColors'
import { mapState } from 'vuex'
export default {
  components: {
    ToolBarColors,
    ToolBarLink,
    ToolBarHeading,
  },
  props:{
      commands: Object,
  },
  computed: mapState(['toggleablePanel']),
}
</script>

<style scoped>
</style>