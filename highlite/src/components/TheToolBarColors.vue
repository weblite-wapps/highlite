<template>
  <div v-if="this.colorPanelIsOpen" class="color-container">
    <ToolBarButton
      v-for="color in colors"
      class="toolbar-btn"
      :key="color"
      @click="commands.textcolor({color})"
      :inner-color="color"
    />
    <ToolBarButton isLabel>
      <input
        type="color"
        class="c--color-input"
        @input="handleColorChange"
        v-model="customColor"
        debounce
      />
    </ToolBarButton>
    <ToolBarButton @click="this.toggleColorPanel" imageSrc="close.svg" />
  </div>
</template>

<script>
import debounce from 'debounce'
import { mapState, mapMutations } from 'vuex'
import { eventBus } from './bus'
import ToolBarButton from './ToolBarButton'
import { formatColor } from '../helpers/typesUtils'
export default {
  components: {
    ToolBarButton,
  },
  computed: mapState(['colorPanelIsOpen']),
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
.color-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 250px) {
  .color-container {
    overflow-y: hidden;
    overflow-x: scroll;
  }
}

@media only screen and (min-width: 250px) and (max-width: 329px) {
  .color-container {
    justify-content: space-around;
  }
}
@media only screen and (min-width: 330px) {
  .color-container {
    justify-content: space-around;
  }
}
</style>