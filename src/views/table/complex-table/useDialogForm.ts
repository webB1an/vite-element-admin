import { ref, reactive, Ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

import type { NormalTableData } from '../typing'

export default function (
  tableData: Ref<NormalTableData[]>,
  originTableData: Ref<NormalTableData[]>
) {
  const dialogFormRef = ref<FormInstance>()
  const dialogFormVisible = ref(false)
  const dialogForm = reactive<NormalTableData>({
    id: 0,
    date: '',
    originCtn: '',
    content: '',
    star: 0,
    reading: 0,
    editor: false
  })

  const dialogFormRules = reactive<FormRules>({
    date: [
      {
        type: 'date',
        required: true,
        message: 'Please pick a date',
        trigger: 'change'
      }
    ],
    content: [{ required: true, message: '请输入内容', trigger: 'blur' }],
    star: [
      {
        type: 'number',
        required: true,
        message: '请选择星级',
        trigger: 'change'
      }
    ],
    reading: [{ required: true, message: '请输入阅读数', trigger: 'blur' }]
  })

  const editorTableRow = (row: NormalTableData): void => {
    Object.assign(dialogForm, row)
    dialogFormVisible.value = true
  }

  const confirmEditorDialogForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid) => {
      if (valid) {
        tableData.value = tableData.value.map((row) => {
          if (row.id === dialogForm.id) {
            row = { ...dialogForm }
          }
          return row
        })
        originTableData.value = originTableData.value.map((row) => {
          if (row.id === dialogForm.id) {
            row = { ...dialogForm }
          }
          return row
        })
        dialogFormVisible.value = false
      }
    })
  }

  return {
    dialogFormRef,
    dialogFormVisible,
    dialogForm,
    dialogFormRules,
    editorTableRow,
    confirmEditorDialogForm
  }
}
