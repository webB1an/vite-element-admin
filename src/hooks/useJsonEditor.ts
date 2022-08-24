import { unref, Ref } from 'vue'
import { basicSetup, EditorView } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { linter } from '@codemirror/lint'
import { json, jsonParseLinter } from '@codemirror/lang-json'

export function useJsonEditor(el: HTMLElement, value: Ref<string>) {
  new EditorView({
    state: EditorState.create({
      doc: unref(value),
      extensions: [
        basicSetup,
        json(),
        linter(jsonParseLinter()),
        EditorView.updateListener.of((v) => {
          if (v.docChanged) {
            value.value = v.state.doc.toString()
          }
        })
      ]
    }),
    parent: el
  })

  return {}
}
