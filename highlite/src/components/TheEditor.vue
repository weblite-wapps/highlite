<template>
  <div class="editor-container">
    <editor-menu-bar :editor="editor">
      <ToolBarMain :tools="customizedToolBarArray" />
    </editor-menu-bar>
    <ToolBarToggleable :commands="this.editor.commands"/>
    <v-divider></v-divider>
    <editor-content class="editor-panel" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { setInitialData } from '../helpers/typesUtils'
import ToolBarMain from './TheToolBarMain'
import ToolBarToggleable from './TheToolBarToggleable'
import { mapState, mapMutations } from 'vuex'
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
    ToolBarMain,
    ToolBarToggleable, 
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
    completeToolBarArray: [],
  }),

  mounted() {
    this.completeToolBarArray = [
      {
        name: 'header',
        active: this.editor.isActive.heading,
        command: () => this.editor.commands.heading({ level: 2 }),
        imageSrc: 'header.svg',
      },
      {
        name: 'bold',
        active: this.editor.isActive.bold,
        command: this.editor.commands.bold,
        imageSrc: 'bold.svg',
      },
      {
        name: 'italic',
        active: this.editor.isActive.italic,
        command: this.editor.commands.italic,
        imageSrc: 'italic.svg',
      },
      {
        name: 'underline',
        active: this.editor.isActive.underline,
        command: this.editor.commands.underline,
        imageSrc: 'underline.svg',
      },
      {
        name: 'textcolor',
        active: this.editor.isActive.textcolor,
        command: () => this.togglePanelTo('color-panel'),
        innerColor: '#000000', //should handle with basebutton
      },
      {
        name: 'bullet_list',
        active: this.editor.isActive.bullet_list,
        command: this.editor.commands.bullet_list,
        imageSrc: 'list.svg',
      },
      {
        name: 'undo',
        active: () => false,
        command: this.editor.commands.undo,
        imageSrc: 'undo.svg',
      },
      {
        name: 'redo',
        active: () => false,
        command: this.editor.commands.redo,
        imageSrc: 'redo.svg',
      },
    ]
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
    customizedToolBarArray() {
      return this.completeToolBarArray.filter((tool, index) => {
        return this.customizeArray[index].able
      })
    },
  },
  methods: {
    ...mapMutations(['togglePanelTo', 'setEditorDatas', 'setIsLoading']),
  },
}
</script>

<style  scoped>
.editor-panel {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

div:focus {
  outline: 0;
}

.editor-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.editor-panel {
  margin-top: 5px;
  height: 100%;
  overflow: auto;
}
</style>