<template>
  <div class="c--color-container">
    <BaseButton
      v-for="color in colors"
      :key="color"
      @click="commands.textcolor({color})"
      :inner-color="color"
    />
    <BaseButton labeled>
      <input type="color" class="c--color-input" @input="handleColorChange" v-model="customColor" />
    </BaseButton>
    <BaseButton @click="togglePanelTo('closed')" imageSrc="close.svg" />
  </div>
</template>

<script>
//vuex
import { mapMutations } from 'vuex'
//utils
import debounce from 'debounce'
export default {
  props: {
    commands: Object,
  },
  data: () => ({
    moreColor: true,
    colors: ['#26B9E5', '#F24343', '#0DAF14', '#EFE60B', '#000000'],
    customColor: '',
  }),
  methods: {
    ...mapMutations(['togglePanelTo']),
    handleColorChange: debounce(function({ target: { value } }) {
      this.commands.textcolor({ color: value })
    }, 100),
  },
}
</script>

<style>
.c--color-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto 10px;
  width: 100%;
  max-width: 450px;
}
</style>