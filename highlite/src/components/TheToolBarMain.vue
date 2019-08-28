<template>
  <div>
    <v-container flat>
      <!-- <v-layout justify-space-between> -->
      <v-btn small fab dark color="#BEBEBE" @click="() => this.addEvent('bold')">
        <v-icon>format_bold</v-icon>
      </v-btn>
      <v-btn small fab dark color="#BEBEBE" @click="() => this.addEvent('italic')">
        <v-icon mx-10>format_italic</v-icon>
      </v-btn>
      <v-btn small fab dark color="#BEBEBE" @click="() => this.addEvent('underline')">
        <v-icon>format_underlined</v-icon>
      </v-btn>
      <v-btn small fab color="#BEBEBE" @click="this.toggleColorPanel">
        <v-icon>fiber_manual_record</v-icon>
      </v-btn>
      <v-btn small fab dark color="#BEBEBE" @click="() => this.addEvent({list: 'bullet'})">
        <v-icon>list</v-icon>
      </v-btn>
      <v-btn
        small
        fab
        dark
        color="#BEBEBE"
        @click="() => this.addEvent({link: 'https://google.com'})"
      >
        <v-icon>insert_link</v-icon>
      </v-btn>
      <v-btn small fab dark color="#BEBEBE" @click="this.toggleHeadingPanel">
        <v-icon>headset</v-icon>
      </v-btn>
      <!-- </v-layout> -->
    </v-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({ isDark: true }),
  props: {},
  methods: {
    ...mapMutations(['toggleColorPanel', 'toggleHeadingPanel', 'addEvent']),
  },
  computed: {
    ...mapState(['editorFormats']),
    // TODO: THIS ISBOLD SHOULD BE ADDED TO EVERY ELMENTS
    isBold: () => {
      // console.log('this.editorFormats ', this.editorFormats)
      return this.editorFormats.bold ? 'dark' : ''
    },
  },
}
</script>

<style  scoped>
</style>