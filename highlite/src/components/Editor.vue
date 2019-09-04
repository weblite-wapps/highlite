<template>
  <div class="rows-container">
    <div class="toolbar-container" ref="toolbar">
      <button class="toolbar-btn" @click="this.toggleHeadingPanel">
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

      <button class="toolbar-btn" @click="this.toggleColorPanel">
        <div
          v-if="this.formatColor"
          class="inner-color"
          :style="{ 'background-color': this.formatColor }"
        ></div>
        <div class="inner-color" v-else></div>
      </button>

      <button class="toolbar-btn ql-list" value="bullet">
        <img src="../../public/006-list-1.svg" />
      </button>

      <button class="toolbar-btn ql-link">
        <img src="../../public/007-link.svg" />
      </button>
    </div>
    <ToolBarColors />
    <ToolBarLink />
    <ToolBarHeading />
    <v-divider></v-divider>
    <div ref="editor">sa;slm;f mslfndlfnl ldnfldnk</div>
  </div>
</template>

<script>
import Quill from 'quill'
import {
  newEvent,
  setInitialData,
  formatColor,
  formatLink,
} from '../helpers/typesUtils'
import { mapState, mapMutations } from 'vuex'
import ToolBarColors from './TheToolBarColors'
import ToolBarLink from './TheToolBarLink'
import ToolBarHeading from './TheToolBarHeading'
import { eventBus } from './bus'
var BackgroundClass = Quill.import('attributors/class/background')
var ColorClass = Quill.import('attributors/class/color')
var SizeStyle = Quill.import('attributors/style/size')
Quill.register(BackgroundClass, true)
Quill.register(ColorClass, true)
Quill.register(SizeStyle, true)
export default {
  components: {
    ToolBarColors,
    ToolBarLink,
    ToolBarHeading,
  },
  data: () => ({
    editor: null,
  }),
  mounted() {
    this.editor = new Quill(this.$refs.editor, {
      modules: {
        toolbar: this.$refs.toolbar,
      },
    })

    var toolbar = this.editor.getModule('toolbar')
    toolbar.addHandler('link', this.handleLinkPanel)

    this.editor.on('text-change', () =>
      this.setEditorDatas({
        text: this.editor.getText(),
        content: this.editor.getContents().ops,
      }),
    )

    // if (this.editor.getText().length === 1) this.editor.focus()

    this.editor.on('selection-change', pos => this.handlePositionChange(pos))

    eventBus.$on(setInitialData, payload => {
      this.insertText(payload)
    })

    eventBus.$on(newEvent, payload => {
      this.handleEvent(payload)
    })

    eventBus.$on(formatColor, payload => {
      this.editor.format('color', payload.color)
    })

    eventBus.$on(formatLink, payload => {
      this.editor.format('link', payload.link)
    })
  },

  methods: {
    ...mapMutations([
      'toggleColorPanel',
      'toggleLinkPanel',
      'toggleHeadingPanel',
      'updateCursorPosition',
      'setEditorFormats',
      'setEditorDatas',
    ]),
    handleLinkPanel(value) {
      if (value) {
        //override below functionality
        // var href = prompt('Enter the URL')
        // this.quill.format('link', href)
        this.toggleLinkPanel()
      } else {
        this.editor.format('link', false)
      }
    },
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
  computed: {
    ...mapState(['text', 'content', 'editorRange', 'editorFormats']),
    formatColor() {
      if (!this.editor) return
      var color = this.editor.getFormat().color
      return color ? color : null
    },
  },
}
</script>

<style  scoped>
.editor-panel {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
.rows-container {
  padding: 0 10px;
}
.toolbar-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
.inner-color {
  position: relative;
  left: 11px;
  height: 19px;
  width: 19px;
  border-radius: 50%;
  background-color: black;
}

.ql-active {
  background-color: #ffb100;
}

button:focus {
  outline: 0;
}

/* to fix svg icons positions */
.toolbar-btn img {
  margin-top: 6px;
}
</style>