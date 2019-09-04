<template>
  <div v-if="this.colorPanelIsOpen" class="color-container">
    <template v-for="color in colors">
      <button class="toolbar-btn" :key="color" @click="emitColor({color})">
        <div class="inner-color" :style="{ 'background-color': color }"></div>
      </button>
    </template>
    <button class="toolbar-btn" :style="{ 'color': 'white', 'font-size': '24px' }">m</button>
    <button class="toolbar-btn" @click="this.toggleColorPanel">
      <img src="../../public/close.svg" />
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { eventBus } from './bus'
import { formatColor } from '../helpers/typesUtils'
export default {
  computed: mapState(['colorPanelIsOpen']),
  // computed: state => state.colorPanelIsOpen,
  // computed: {
  //   colorPanelIsOpen() {
  //     return this.$store.state.colorPanelIsOpen
  //   },
  // },
  data: () => ({
    moreColor: true,
    colors: ['#26B9E5', '#F24343', '#0DAF14', '#EFE60B', '#000000'],
  }),
  props: {
    // isOpen: Boolean,
  },
  methods: {
    ...mapMutations(['toggleColorPanel']),
    emitColor(event) {
      eventBus.$emit(formatColor, event)
    },
  },
}
</script>

<style  scoped>
button:focus {
  outline: 0;
}

/* to fix svg icons positions */
.toolbar-btn img {
  margin-top: 6px;
}
.toolbar-btn {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #bebebe 0% 0% no-repeat padding-box;
  opacity: 1;
  display: inline-block;
}
.inner-color {
  position: relative;
  left: 11px;
  height: 19px;
  width: 19px;
  border-radius: 50%;
  background-color: black;
}
.color-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
}
</style>