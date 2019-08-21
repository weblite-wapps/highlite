<template>
  <div ref="editor">in editor</div>
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
    this.editor.root.innerHTML = this.editorText
    this.editor.on('text-change', () =>
      this.$emit('updateDatas', {
        text: this.editor.getText(),
        content: this.editor.getContents().ops,
      }),
    )
    this.editor.on('selection-change', pos => this.handlePositionChange(pos))
  },
  methods: {
    ...mapMutations(['updateCursorPosition', 'setEditorFormats']),
    handlePositionChange(pos) {
      if (pos) {
        this.setEditorFormats(this.editor.getFormat(pos.index, pos.length))
        this.updateCursorPosition(pos)
      }
    },
  },
  computed: mapState(['editorText', 'editorRange', 'event', 'editorFormats']),
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
  },
}
</script>

<style  scoped>
</style>