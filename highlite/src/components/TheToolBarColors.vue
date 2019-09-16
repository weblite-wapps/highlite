<template>
  <div class="color-container">
    <ToolBarButton
      v-for="color in colors"
      :key="color"
      @click="commands.textcolor({color})"
      :inner-color="color"
    />
    <ToolBarButton labeled>
      <input type="color" class="c--color-input" @input="handleColorChange" v-model="customColor" />
    </ToolBarButton>
    <ToolBarButton @click="togglePanelTo('closed')" imageSrc="close.svg" />
  </div>
</template>

<script>
import debounce from 'debounce'
import { mapState, mapMutations } from 'vuex'
import ToolBarButton from './ToolBarButton'
export default {
  components: {
    ToolBarButton,
  },
  data: () => ({
    moreColor: true,
    colors: ['#26B9E5', '#F24343', '#0DAF14', '#EFE60B', '#000000'],
    customColor: '',
  }),
  props: {
    commands: Object,
  },
  methods: {
    ...mapMutations(['togglePanelTo']),
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
  justify-content: left;
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