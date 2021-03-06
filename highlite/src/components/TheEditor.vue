<template>
  <div class="c--editor-container">
    <EditorMenuBar :editor="editor">
      <ToolBar :editor="this.editor" />
    </EditorMenuBar>
    <ToggleableBar :commands="this.editor.commands" />
    <v-divider width="100%"></v-divider>
    <EditorContent class="c--editor-panel" dir="auto" :editor="editor" />
  </div>
</template>

<script>
//components
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import ToolBar from './TheEditorToolBar'
import ToggleableBar from './TheEditorToggleableBar'
//event handler
import { eventBus } from './bus'
//vuex
import { mapMutations } from 'vuex'
//utils
import TextColor from '../helpers/TextColor'
import { setInitialData } from '../helpers/typesUtils'
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

<style>
.c--editor-panel {
  margin-top: 5px;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.c--editor-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>