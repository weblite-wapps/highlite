<template>
  <div class="editor-container">
    <EditorMenuBar :editor="editor">
      <ToolBar :editor="this.editor"/>
    </EditorMenuBar>
    <ToggleableBar :commands="this.editor.commands"/>
    <v-divider></v-divider>
    <EditorContent class="editor-panel" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { setInitialData } from '../helpers/typesUtils'
import ToolBar from './TheEditorToolBar'
import ToggleableBar from './TheEditorToggleableBar'
import { mapMutations } from 'vuex'
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
  Table,
  TableHeader,
  TableCell,
  TableRow,
} from 'tiptap-extensions'
import TextColor from '../helpers/TextColor'
export default {
  components: { 
    ToolBar,
    ToggleableBar, 
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
  methods: {
    ...mapMutations(['setEditorDatas', 'setIsLoading']),
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