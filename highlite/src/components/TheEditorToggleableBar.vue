<template>
    <Colors v-if="toggleablePanel == 'color-panel'" :commands="commands" />
    <Heading v-else-if="toggleablePanel == 'heading-panel'" :commands="commands" />
    <Link v-else-if="toggleablePanel == 'link-panel'" :commands="commands" />
</template>

<script>
//components
import Heading from './TheEditorToggleableBarHeading'
import Link from './TheEditorToggleableBarLink'
import Colors from './TheEditorToggleableBarColors'
//vuex
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

<style>
</style>