<template>
  <div ref="editor">sa;slm;f mslfndlfnl ldnfldnk</div>
</template>

<script>
import Quill from 'quill'
import { eventBus } from './bus'
import { newEvent } from '../helpers/typesUtils'
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