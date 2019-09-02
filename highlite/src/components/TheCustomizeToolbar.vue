
<template>
  <div>
    <v-dialog v-model="customizeIsOpen" transition="dialog-bottom-transition" fullscreen>
      <div class="c--cutomize-appBar">
        <div class="c--customize-appBar-close-icon" @click="()=> this.setCustomizeIsOpen(false)">
          <img src="close.svg" alt />
        </div>
        <div class="c--customize-appBar-title">Customize Toolbar</div>
        <div class="c--customize-appBar-submit-icon" @click="this.handleSubmit">
          <img src="tik.svg" alt />
        </div>
      </div>
      <div class="c--options-list">
        <v-list>
          <v-list-item v-for="item in array" :key="item.title">
            <v-checkbox color="#FFB100" v-model="item.able" :label="item.title"></v-checkbox>
          </v-list-item>
        </v-list>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    array: [
      { title: 'Header', able: true },
      { title: 'Bold', able: true },
      { title: 'Italic', able: true },
      { title: 'Underline', able: true },
      { title: 'Color', able: true },
      { title: 'Bullet', able: true },
      { title: 'Link', able: true },
      { title: 'Table', able: false },
      { title: 'Image', able: false },
    ],
    dialog: true,
  }),
  computed: {
    ...mapState(['customizeArray', 'customizeIsOpen']),
  },
  methods: {
    ...mapMutations(['setCustomizeIsOpen', 'setCustomizeArray']),
    handleSubmit() {
      this.setCustomizeArray(this.array)
      this.setCustomizeIsOpen(false)
    },
  },
  mounted() {
    this.array = this.customizeArray
  },
}
</script>

<style  scoped>
.c--cutomize-appBar {
  width: 100%;
  background-color: #505050;
  height: 50px;
  display: flex;
  padding-top: 15px;
}

.c--customize-appBar-close-icon {
  margin-left: 20px;
  margin-right: auto;
  color: white;
  cursor: pointer;
}

.c--customize-appBar-title {
  font: Regular 16px/25px Roboto;
  letter-spacing: 0;
  color: #ffffff;
  width: 135px;
  height: 15px;
}

.c--customize-appBar-submit-icon {
  margin-right: 20px;
  margin-left: auto;
  color: white;
  cursor: pointer;
}
.c--options-list {
}
</style>


