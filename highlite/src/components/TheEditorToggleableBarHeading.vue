<template >
  <div class="heading-container">
    <BaseButton @click="this.toggleDrawer" imageSrc="menu.svg" />
    <BaseButton stretched @click="commands.heading({ level: 2 })">ADD</BaseButton>
    <BaseButton stretched>PREV</BaseButton>
    <BaseButton stretched>NEXT</BaseButton>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({}),
  props: {
    commands: Object,
  },
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