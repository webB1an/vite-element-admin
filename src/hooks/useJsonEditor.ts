import { unref, Ref } from 'vue'
import { basicSetup, EditorView } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { linter } from '@codemirror/lint'
import { json, jsonParseLinter } from '@codemirror/lang-json'
import { oneDarkTheme } from '@codemirror/theme-one-dark'

interface Params {
  el: HTMLElement
  value: Ref<string>
  theme?: string
}

export function useJsonEditor(el: HTMLElement, value: Ref<string>, theme: string) {
  let editor: EditorView

  init({ el, value, theme })

  function init(params: Params) {
    const extensions = [
      basicSetup,
      json(),
      linter(jsonParseLinter()),
      EditorView.updateListener.of((v) => {
        if (v.docChanged) {
          value.value = v.state.doc.toString()
        }
      })
    ]

    if (params.theme) {
      extensions.push(oneDarkTheme)
    }

    editor = new EditorView({
      state: EditorState.create({
        doc: unref(params.value),
        extensions
      }),
      parent: params.el
    })

    return editor
  }

  function changeTheme(theme: string) {
    editor?.destroy()
    init({ el, value, theme })
  }

  return {
    changeTheme
  }
}
