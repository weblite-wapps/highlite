<template>
  <div v-if="this.colorPanelIsOpen" class="color-container">
    <template v-for="color in colors">
      <button class="toolbar-btn" :key="color" @click="commands.textcolor({color})">
        <div class="inner-color" :style="{ 'background-color': color }"></div>
      </button>
    </template>
    <label class="toolbar-btn">
      <input
        type="color"
        class="c--color-input"
        @input="handleColorChange"
        v-model="customColor"
        debounce
      />
    </label>
    <button class="toolbar-btn" @click="this.toggleColorPanel">
      <img src="../../public/close.svg" />
    </button>
  </div>
</template>

<script>
import debounce from 'debounce'
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
    customColor: '',
  }),
  props: {
    commands: Object,
  },
  methods: {
    ...mapMutations(['toggleColorPanel']),
    emitColor(event) {
      eventBus.$emit(formatColor, event)
    },
    handleColorChange: debounce(function({ target: { value } }) {
      this.commands.textcolor({ color: value })
    }, 100),
  },
}
</script>

<style scoped>
button,
input,
label:focus {
  outline: 0;
}

label input {
  margin: auto;
  cursor: pointer;
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
  margin-right: 9px;
  margin-bottom: 10px;
  min-width: 30px;
}
label {
  display: inline-flex;
  cursor: pointer;
}

.inner-color {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: 19px;
  width: 19px;
  border-radius: 50%;
  background-color: black;
}
.color-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 500px;
  margin: auto;
}

.c--color-input {
  width: 20px;
}

@media only screen and (max-width: 250px) {
  .color-container {
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .toolbar-btn {
    width: auto;
    height: auto;
    margin-right: auto;
  }
}

@media only screen and (min-width: 250px) and (max-width: 329px) {
  .color-container {
    justify-content: space-around;
    /* overflow-x: hidden; */
  }

  .toolbar-btn {
    width: auto;
    height: auto;
    margin-right: auto;
    margin-left: auto;
  }
}
@media only screen and (min-width: 330px) {
  .color-container {
    justify-content: space-around;
  }
}
</style>