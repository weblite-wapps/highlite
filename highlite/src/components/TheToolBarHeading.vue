<template >
  <div v-if="this.headingPanelIsOpen" class="heading-container">
    <button class="toolbar-btn">
      <img src="../../public/menu.svg" />
    </button>
    <button class="stretched-toolbar-btn">ADD</button>
    <button class="stretched-toolbar-btn">PREV</button>
    <button class="stretched-toolbar-btn">NEXT</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({}),
  props: {},
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
.toolbar-btn {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #bebebe 0% 0% no-repeat padding-box;
  opacity: 1;
  display: inline-block;
}
/* to fix svg icons positions */
.toolbar-btn img {
  margin-top: 6px;
}
.stretched-toolbar-btn {
  min-width: 80px;
  height: 40px;
  border-radius: 20px;
  background: #bebebe 0% 0% no-repeat padding-box;
  opacity: 1;
  color: white;
  text-align: center;
}
</style>