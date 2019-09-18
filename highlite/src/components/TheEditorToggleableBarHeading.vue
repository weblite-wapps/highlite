<template >
  <div class="c--heading-container">
    <BaseButton @click="this.toggleDrawer" imageSrc="menu.svg" />
    <BaseButton stretched @click="commands.heading({ level: 2 })">ADD</BaseButton>
    <BaseButton stretched>PREV</BaseButton>
    <BaseButton stretched>NEXT</BaseButton>
  </div>
</template>
<script>
//vuex
import { mapMutations } from 'vuex'
export default {
  props: {
    commands: Object,
  },
  methods: {
    ...mapMutations(['toggleDrawer']),
  },
}
</script>

<style>
.c--heading-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto 10px;
  width: 100%;
  max-width: 450px;
}
</style>