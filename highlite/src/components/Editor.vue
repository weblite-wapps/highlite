<template>
  <div class="editor-container">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive, getMarkAttrs }">
      <div>
        <div class="toolbar-container">
          <ToolBarButton v-for="(tool, index) in customizedToolBarArray"
            class="toolbar-btn"
            :class="{ 'active': tool.active() }"
            @click="tool.command"
            :image-src="tool.imageSrc"
            :inner-color="tool.innerColor"
            :key="index" />
        </div>
        <ToolBarColors :commands="commands" />
        <ToolBarHeading :commands="commands" />
      </div>
    </editor-menu-bar>
    <ToolBarLink :commands="this.editor.commands" />
    <v-divider></v-divider>
    <editor-content dir="auto" class="editor-panel" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { setInitialData } from '../helpers/typesUtils'
import ToolBarHeading from './TheToolBarHeading'
import ToolBarColors from './TheToolBarColors'
import ToolBarButton from './ToolBarButton'
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
    ToolBarButton,
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
        command: this.toggleColorPanel,
        innerColor: '#FFFFFF',//should handle with basebutton
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
        command: this.editor.commands.undo,
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
    customizedToolBarArray(){
      return this.completeToolBarArray.filter((tool, index)=>{
        return this.customizeArray[index].able
      })
    }
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

div:focus {
  outline: 0;
}

@media only screen and (max-width: 300px) {
  .toolbar-container {
    overflow-y: hidden;
    overflow-x: scroll;
  }
}

@media only screen and (min-width: 300px) and (max-width: 329px) {
  .toolbar-container {
    overflow-x: hidden;
  }
}
@media only screen and (min-width: 330px) {
  .toolbar-container {
    justify-content: space-around;
  }
}

@media only screen and (min-width: 400px) {
  .toolbar-btn {
    margin-right: 9px;
  }
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