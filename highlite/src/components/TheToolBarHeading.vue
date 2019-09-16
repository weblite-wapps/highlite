<template >
  <div class="heading-container">
    <ToolBarButton @click="this.toggleDrawer" imageSrc="menu.svg" />
    <ToolBarButton stretched @click="commands.heading({ level: 2 })">ADD</ToolBarButton>
    <ToolBarButton stretched>PREV</ToolBarButton>
    <ToolBarButton stretched>NEXT</ToolBarButton>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import ToolBarButton from './ToolBarButton'
export default {
  components: {
    ToolBarButton,
  },
  data: () => ({}),
  props: {
    commands: Object,
  },
  computed: mapState(['headingPanelIsOpen']),
  methods: {
    ...mapMutations(['toggleDrawer']),
  },
}
</script>

<style  scoped>
button:focus {
  outline: 0;
}
.heading-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
}
</style>