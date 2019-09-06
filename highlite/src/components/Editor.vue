<template>
  <div>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive, getMarkAttrs }">
      <div>
        <div class="toolbar-container" ref="toolbar">
          <button
            v-if="customizeArray[0].able"
            class="toolbar-btn"
            :class="{ 'active': isActive.heading() }"
            @click="commands.heading({ level: 2 })"
          >
            <img src="../../public/004-header.svg" />
          </button>
          <button
            v-if="customizeArray[1].able"
            class="toolbar-btn"
            :class="{ 'active': isActive.bold() }"
            @click="commands.bold"
          >
            <img src="../../public/002-bold-text-option.svg" />
          </button>
          <button
            v-if="customizeArray[2].able"
            class="toolbar-btn"
            :class="{ 'active': isActive.italic() }"
            @click="commands.italic"
          >
            <img src="../../public/001-italicize-text.svg" />
          </button>

          <button
            v-if="customizeArray[3].able"
            class="toolbar-btn"
            :class="{ 'active': isActive.underline() }"
            @click="commands.underline"
          >
            <img src="../../public/003-underline-text-option.svg" />
          </button>

          <button
            v-if="customizeArray[4].able"
            :class="{ 'active': isActive.textcolor() }"
            class="toolbar-btn"
            @click="toggleColorPanel"
          >
            <div class="inner-color"></div>
          </button>
          <button
            v-if="customizeArray[5].able"
            class="toolbar-btn"
            value="bullet"
            :class="{ 'active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <img src="../../public/006-list-1.svg" />
          </button>

          <button
            v-if="customizeArray[6].able"
            class="toolbar-btn ql-link"
            @click="toggleLinkPanel"
            :class="{ 'active': isActive.link() }"
          >
            <img src="../../public/007-link.svg" />
          </button>

          <!-- start todolist -->
          <!-- <button
            v-if="customizeArray[6].able"
            class="toolbar-btn ql-link"
            @click="commands.todo_list"
            :class="{ 'active': isActive.todo_list() }"
          >
            <img src="../../public/007-link.svg" />
          </button>-->
          <!-- end of todolist -->

          <!-- <button
            class="toolbar-btn ql-link"
            @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
          >
            <img src="../../public/007-link.svg" />
          </button>-->

          <span v-if="isActive.table()">
            <button class="menubar__button" @click="commands.deleteTable">delete_table</button>
            <hr />
            <button class="menubar__button" @click="commands.addColumnBefore">add_col_before</button>
            <hr />
            <button class="menubar__button" @click="commands.addColumnAfter">
              <icon name="add_col_after" />
            </button>
            <button class="menubar__button" @click="commands.deleteColumn">
              <icon name="delete_col" />
            </button>
            <button class="menubar__button" @click="commands.addRowBefore">
              <icon name="add_row_before" />
            </button>
            <button class="menubar__button" @click="commands.addRowAfter">
              <icon name="add_row_after" />
            </button>
            <button class="menubar__button" @click="commands.deleteRow">
              <icon name="delete_row" />
            </button>
            <button class="menubar__button" @click="commands.toggleCellMerge">
              <icon name="combine_cells" />
            </button>
          </span>
        </div>
        <ToolBarColors :commands="commands" />
        <ToolBarHeading :commands="commands" />
      </div>
    </editor-menu-bar>
    <ToolBarLink :commands="this.editor.commands" />
    <v-divider></v-divider>

    <editor-content dir="auto" class="editor-container" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { setInitialData } from '../helpers/typesUtils'
import ToolBarHeading from './TheToolBarHeading'
import ToolBarColors from './TheToolBarColors'
import { mapState, mapMutations } from 'vuex'
import ToolBarLink from './TheToolBarLink'
import { eventBus } from './bus'
import Icon from './icon'
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
  Table,
  TableHeader,
  TableCell,
  TableRow,
} from 'tiptap-extensions'
import TextColor from '../helpers/TextColor'
export default {
  components: {
    ToolBarColors,
    ToolBarLink,
    ToolBarHeading,
    EditorContent,
    EditorMenuBar,
    Icon,
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
        new Table({
          resizable: true,
        }),
        new TableHeader(),
        new TableCell(),
        new TableRow(),
      ],
      content: ``,
      autoFocus: true,
    }),
  }),

  mounted() {
    this.editor.on('update', ({ getHTML, getJSON }) => {
      this.setIsLoading(true)
      this.setEditorDatas(getJSON())
    })

    eventBus.$on(setInitialData, data => {
      if (data.content) {
        this.editor.setContent(JSON.parse(data.content))
        this.setEditorDatas(JSON.parse(data.content))
      }
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  computed: {
    ...mapState(['customizeArray']),
  },
  methods: {
    ...mapMutations([
      'toggleColorPanel',
      'toggleLinkPanel',
      'toggleHeadingPanel',
      'setEditorDatas',
      'setIsLoading',
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
  margin: 0px auto 0px auto;
  max-width: 500px;
  justify-content: left;
  overflow-y: hidden;
  overflow-x: hidden;
}
.toolbar-btn {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #bebebe 0% 0% no-repeat padding-box;
  opacity: 1;
  display: inline-block;
  min-width: 35px;
  margin-right: 9px;
  margin-bottom: 10px;
}
.inner-color {
  position: relative;
  margin-left: auto;
  margin-right: auto;
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
@media only screen and (max-width: 300px) {
  .toolbar-container {
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .toolbar-btn {
    width: auto;
    height: auto;
    margin-right: auto;
  }
}

@media only screen and (min-width: 300px) and (max-width: 329px) {
  .toolbar-container {
    justify-content: space-around;
    overflow-x: hidden;
  }
  .toolbar-btn {
    width: auto;
    height: auto;
    margin-right: auto;
    margin-left: auto;
  }
  .toolbar-btn img {
  }
}
@media only screen and (min-width: 330px) {
  .toolbar-container {
    justify-content: space-around;
  }
}

.editor-container {
  margin-top: 5px;
}
</style>