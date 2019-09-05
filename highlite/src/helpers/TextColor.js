/* eslint-disable class-methods-use-this */
import { Mark } from 'tiptap'
import { toggleMark, markInputRule, markPasteRule, updateMark } from 'tiptap-commands'

export default class TextColor extends Mark {

    get name() {
        return 'textcolor'
    }

    get defaultOptions() {
        return {
            color: ['red'],
        }
    }

    get schema() {
        return {
            attrs: {
                color: {
                    default: 'rgba(0,0,0,1)',
                },
            },
            parseDOM: this.options.color.map(color => ({
                tag: `span[style="background-color:${color}"]`,
                attrs: { color },
            })),
            toDOM:
                node => {
                    return ['span', {
                        style: `background-color:${node.attrs.color}55`
                    }, 0]
                }
        }
    }

    commands({ type }) {
        return (attrs) => updateMark(type, attrs)
    }

    keys({ type }) {
        return {
            'Mod-b': updateMark(type),
        }
    }

    inputRules({ type }) {
        return [
            markInputRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/, type),
        ]
    }

    pasteRules({ type }) {
        return [
            markPasteRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)/g, type),
        ]
    }
}
