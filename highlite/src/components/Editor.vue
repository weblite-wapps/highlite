<template>
  <div ref="editor">sa;slm;f mslfndlfnl ldnfldnk</div>
</template>

<script>
import Quill from 'quill'
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    editor: null,
  }),
  props: {},
  mounted() {
    this.editor = new Quill(this.$refs.editor, {})
    this.editor.on('text-change', () =>
      this.setEditorDatas({
        text: this.editor.getText(),
        content: this.editor.getContents().ops,
      }),
    )
    if (this.editor.getText().length === 1) this.editor.focus()

    // this.editor.once('text-change', () =>
    //   this.setEditorDatas({
    //     text: this.editor.getText(),
    //     content: this.editor.getContents().ops,
    //   }),
    // )

    this.editor.on('selection-change', pos => this.handlePositionChange(pos))
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
  },
  computed: mapState([
    'text',
    'content',
    'editorRange',
    'event',
    'editorFormats',
  ]),
  watch: {
    event() {
      const { index, length } = this.editorRange
      this.editor.formatText(
        index,
        length,
        this.event,
        !this.editorFormats[this.event],
      )
      this.setEditorFormats(this.editor.getFormat(index, length))
    },
    text() {
      // this.editor.setText(this.text)
      // this.editor.setContents(this.content)
      // console.log('this.content ', this.content)
    },
    content() {
      // this.editor.setText(this.text)
      // this.editor.setContents(this.content)
      // console.log('this.text ', this.text)
      // console.log('this.content ', this.content)
      // console.log('this.content ', typeof this.content)
      // console.log('this.content ', JSON.stringify(this.content))
    },
  },
}
</script>

<style  scoped>
</style>