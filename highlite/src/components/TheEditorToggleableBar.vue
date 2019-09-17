<template>
  <div class="toggleable-toolbar">
    <Colors v-if="toggleablePanel == 'color-panel'" :commands="commands" />
    <Heading v-if="toggleablePanel == 'heading-panel'" :commands="commands" />
    <Link v-if="toggleablePanel == 'link-panel'" :commands="this.commands" />
  </div>
</template>

<script>
import Heading from './TheEditorToggleableBarHeading'
import Link from './TheEditorToggleableBarLink'
import Colors from './TheEditorToggleableBarColors'
import { mapState } from 'vuex'
export default {
  components: {
    Colors,
    Link,
    Heading,
  },
  props:{
      commands: Object,
  },
  computed: mapState(['toggleablePanel']),
}
</script>

<style scoped>
</style>