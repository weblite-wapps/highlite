<template>
  <div>
    <div ref="toolbar">
      <v-container flat>
        <!-- <v-layout justify-space-between> -->
        <v-btn class="ql-bold" small fab dark color="#BEBEBE">
          <v-icon>format_bold</v-icon>
        </v-btn>
        <v-btn class="ql-italic" small fab dark color="#BEBEBE">
          <v-icon mx-10>format_italic</v-icon>
        </v-btn>
        <v-btn class="ql-underline" small fab dark color="#BEBEBE">
          <v-icon>format_underlined</v-icon>
        </v-btn>
        <v-btn small fab color="#BEBEBE" @click="this.toggleColorPanel">
          <v-icon>fiber_manual_record</v-icon>
        </v-btn>
        <v-btn class="ql-list" value="bullet" small fab dark color="#BEBEBE">
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
    <div ref="editor">sa;slm;f mslfndlfnl ldnfldnk</div>
  </div>
</template>

<script>
import Quill from 'quill'
import { eventBus } from './bus'
import { newEvent, setInitialData } from '../helpers/typesUtils'
import { mapState, mapMutations } from 'vuex'
var BackgroundClass = Quill.import('attributors/class/background')
var ColorClass = Quill.import('attributors/class/color')
var SizeStyle = Quill.import('attributors/style/size')
Quill.register(BackgroundClass, true)
Quill.register(ColorClass, true)
Quill.register(SizeStyle, true)
export default {
  data: () => ({
    editor: null,
  }),
  mounted() {
    this.editor = new Quill(this.$refs.editor, {
      modules: {
        toolbar: this.$refs.toolbar,
      },
    })
    this.editor.on('text-change', () =>
      this.setEditorDatas({
        text: this.editor.getText(),
        content: this.editor.getContents().ops,
      }),
    )

    if (this.editor.getText().length === 1) this.editor.focus()

    this.editor.on('selection-change', pos => this.handlePositionChange(pos))

    eventBus.$on(setInitialData, payload => {
      this.insertText(payload)
    })

    eventBus.$on(newEvent, payload => {
      this.handleEvent(payload)
    })
  },

  methods: {
    ...mapMutations([
      'updateCursorPosition',
      'setEditorFormats',
      'setEditorDatas',
    ]),
    handlePositionChange(pos) {
      if (pos) {
        this.setEditorFormats(this.editor.getFormat(pos.index, pos.length))
        this.updateCursorPosition(pos)
      }
    },
    insertText(payload) {
      console.log('payload', payload)
      this.editor.setText(payload.text)
      this.editor.setContents(JSON.parse(payload.content))
    },
    handleEvent(event) {
      const { index, length } = this.editorRange
      this.editor.formatText(index, length, event, !this.editorFormats[event])
      this.setEditorFormats(this.editor.getFormat(index, length))
    },
  },
  computed: mapState(['text', 'content', 'editorRange', 'editorFormats']),
}
</script>

<style  scoped>
</style>