<template>
  <div v-if="this.linkPanelIsOpen">
    <div class="link-container">
      <input v-model="currentLink" class="text-field" type="text" placeholder="Enter Your Link" />
      <button class="toolbar-btn" @click="() => this.commands.link({href: this.currentLink})">
        <img src="../../public/tik.svg" />
      </button>
      <button class="toolbar-btn" @click="this.toggleLinkPanel">
        <img src="../../public/close.svg" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { eventBus } from './bus'
import { formatLink } from '../helpers/typesUtils'
export default {
  computed: mapState(['linkPanelIsOpen']),
  methods: {
    ...mapMutations(['toggleLinkPanel']),
    emitLink(event) {
      eventBus.$emit(formatLink, event)
    },
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
button,
input:focus {
  outline: 0;
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
</style>