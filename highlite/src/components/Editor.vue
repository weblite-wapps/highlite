<template>
  <div class="editor-panel">
    <div ref="scrollingContainer">
      <div ref="editor">
        1111111
        11111111
        11111111
        11111111
        11111111
        11111111
        1111111
        11111111
        11111111
        11111111
        11111111
        111111111111111
        11111111
        11111111
        11111111
        11111111
        111111111111111
        11111111
        11111111
        11111111
        11111111
        111111111111111
        11111111
        11111111
        11111111
        11111111
        111111111111111
        11111111
        11111111
        11111111
        11111111
        111111111111111
        11111111
        11111111
        11111111
        11111111
        111111111111111
        11111111
        11111111
        11111111
        11111111
        111111111111111
        11111111
        11111111
      </div>
    </div>
  </div>
</template>

<script>
import Quill from 'quill'
import { eventBus } from './bus'
import { newEvent, setInitialData } from '../helpers/typesUtils'
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    editor: null,
  }),
  mounted() {
    this.editor = new Quill(this.$refs.editor, {
      scrollingContainer: this.$refs.scrollingContainer,
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

    this.editor.setSelection(1100, 1150)
    this.editor.focus()
    console.log(
      'this.editor.scrollingContainer: ',
      this.editor.scrollingContainer,
    )
    this.editor.scrollingContainer.scrollTop = 200
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
      if (!payload.text) return
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
.editor-panel {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>