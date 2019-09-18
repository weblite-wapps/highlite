export default editor => [
  {
    name: 'header',
    active: editor.isActive.heading,
    command: () => editor.commands.heading({ level: 2 }),
    imageSrc: 'header.svg',
  },
  {
    name: 'bold',
    active: editor.isActive.bold,
    command: editor.commands.bold,
    imageSrc: 'bold.svg',
  },
  {
    name: 'italic',
    active: editor.isActive.italic,
    command: editor.commands.italic,
    imageSrc: 'italic.svg',
  },
  {
    name: 'underline',
    active: editor.isActive.underline,
    command: editor.commands.underline,
    imageSrc: 'underline.svg',
  },
  {
    name: 'textcolor',
    active: editor.isActive.textcolor,
    command: () => this.togglePanelTo('color-panel'),
    innerColor: '#000000', //should handle with BaseButton
  },
  {
    name: 'bullet_list',
    active: editor.isActive.bullet_list,
    command: editor.commands.bullet_list,
    imageSrc: 'list.svg',
  },
  {
    name: 'undo',
    active: () => false,
    command: editor.commands.undo,
    imageSrc: 'undo.svg',
  },
  {
    name: 'redo',
    active: () => false,
    command: editor.commands.redo,
    imageSrc: 'redo.svg',
  },
]
