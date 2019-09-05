<template>
  <div>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive, getMarkAttrs }">
      <div>
        <div class="toolbar-container" ref="toolbar">
          <button class="toolbar-btn" @click="toggleHeadingPanel">
            <img src="../../public/004-header.svg" />
          </button>
          <button
            class="toolbar-btn"
            :class="{ 'active': isActive.bold() }"
          >
            <img src="../../public/002-bold-text-option.svg" />
          </button>
          <button
            class="toolbar-btn"
            :class="{ 'active': isActive.italic() }"
            @click="commands.italic"
          >
            <img src="../../public/001-italicize-text.svg" />
          </button>

          <button
            class="toolbar-btn"
            :class="{ 'active': isActive.underline() }"
            @click="commands.underline"
          >
            <img src="../../public/003-underline-text-option.svg" />
          </button>

          <button
            class="toolbar-btn"
            @click="toggleColorPanel"
            :class="{ 'active': isActive.textcolor() }"
          >
            <div class="inner-color"></div>
          </button>
          <button
            class="toolbar-btn"
            value="bullet"
            :class="{ 'active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <img src="../../public/006-list-1.svg" />
          </button>

          <button
            class="toolbar-btn ql-link"
            @click="toggleLinkPanel"
            :class="{ 'active': isActive.link() }"
          >
            <img src="../../public/007-link.svg" />
          </button>
        </div>
        <ToolBarColors :commands="commands" />
        <ToolBarHeading :commands="commands" />
      </div>
    </editor-menu-bar>
    <ToolBarLink :commands="this.editor.commands" />
    <v-divider></v-divider>

    <editor-content style="outline:non" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
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
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'
import TextColor from '../helpers/TextColor'
export default {
  components: {
    ToolBarColors,
    ToolBarLink,
    ToolBarHeading,
    EditorContent,
    EditorMenuBar,
  },
  data: () => ({
    editor: new Editor({
      extensions: [
        new TextColor(),
        new Blockquote(),
        new BulletList(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new HorizontalRule(),
        new ListItem(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Link(),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History(),
      ],
      content: ``,
      autoFocus: true,
      onUpdate: () => {},
    }),
  }),

  mounted() {
    this.editor.setContent(this.content)
    this.editor.on('update', ({ getHTML, getJSON }) => {
      this.setEditorDatas(this.editor.getJSON())
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },

  methods: {
    ...mapMutations([
      'toggleColorPanel',
      'toggleLinkPanel',
      'toggleHeadingPanel',
      'setEditorDatas',
    ]),
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

.active {
  background-color: #ffb100;
}

button,
div:focus {
  outline: 0;
}
/* to fix svg icons positions */
.toolbar-btn img {
  margin-top: 6px;
}
</style>