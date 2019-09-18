<template>
  <div class="c--link-container">
    <input v-model="currentLink" class="c--text-field" type="text" placeholder="Enter Your Link" />
    <BaseButton @click="() => this.commands.link({href: this.currentLink})" imageSrc="tik.svg" />
    <BaseButton @click="togglePanelTo('closed')" imageSrc="close.svg" />
  </div>
</template>

<script>
//vuex
import { mapMutations } from 'vuex'
export default {
  props: {
    commands: Object,
  },
  data: () => ({
    currentLink: '',
  }),
  methods: {
    ...mapMutations(['togglePanelTo']),
  },
}
</script>

<style>
.c--link-container {
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto 10px;
}
.c--text-field {
  min-width: 210px;
  height: 40px;
  border-radius: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 3px solid #d9d9d9;
  opacity: 1;
  padding: 0 5%;
}
</style>