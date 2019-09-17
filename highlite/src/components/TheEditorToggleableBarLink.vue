<template>
  <div>
    <div class="link-container">
      <input v-model="currentLink" class="text-field" type="text" placeholder="Enter Your Link" />
      <BaseButton
        @click="() => this.commands.link({href: this.currentLink})"
        imageSrc="tik.svg"
      />
      <BaseButton @click="togglePanelTo('closed')" imageSrc="close.svg" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['togglePanelTo']),
  },
  data: () => ({
    currentLink: '',
  }),
  props: {
    commands: Object,
  },
}
</script>

<style  scoped>
.link-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin: 10px 0;
  max-width: 400px;
  margin: auto;
}
.text-field {
  min-width: 210px;
  height: 40px;
  border-radius: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 3px solid #d9d9d9;
  opacity: 1;
  padding: 0 5%;
}

input:focus {
  outline: 0;
}
</style>