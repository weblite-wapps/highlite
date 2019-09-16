<template>
  <div>
    <div class="link-container">
      <input v-model="currentLink" class="text-field" type="text" placeholder="Enter Your Link" />
      <ToolBarButton
        @click="() => this.commands.link({href: this.currentLink})"
        imageSrc="tik.svg"
      />
      <ToolBarButton @click="togglePanelTo('closed')" imageSrc="close.svg" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ToolBarButton from './ToolBarButton'
export default {
  components: {
    ToolBarButton,
  },
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
  margin: 10px 0;
  max-width: 400px;
  margin: auto;
}
.text-field {
  min-width: 210px;
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