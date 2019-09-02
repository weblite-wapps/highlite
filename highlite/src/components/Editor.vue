<template>
  <div>
    <div class="new-toolbar" ref="toolbar">
      <button class="toolbar-btn">
        <img src="../../public/004-header.svg" />
      </button>
      <button class="toolbar-btn ql-bold">
        <img src="../../public/002-bold-text-option.svg" />
      </button>
      <button class="toolbar-btn ql-italic">
        <img src="../../public/001-italicize-text.svg" />
      </button>

      <button class="toolbar-btn ql-underline">
        <img src="../../public/003-underline-text-option.svg" />
      </button>

      <button class="toolbar-btn">
        <div class="inner-color"/>
      </button>

      <button class="toolbar-btn ql-list" value="bullet">
        <img src="../../public/006-list-1.svg" />
      </button>

      <button class="toolbar-btn ql-link">
        <img src="../../public/007-link.svg" />
      </button>
    </div>
    <v-divider></v-divider>
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
.new-toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px 0;
}
.toolbar-btn {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #bebebe 0% 0% no-repeat padding-box;
  opacity: 1;
  display: inline-block;
}
.inner-color{
  position: relative;
  left: 11px;
  height: 19px;
  width: 19px;
  border-radius: 50%;
  background-color: black;
}
.ql-active{
  background-color: #FFB100;
}
button:focus {outline:0;}

.toolbar-btn img {
  margin-top: 6px;
}

</style>