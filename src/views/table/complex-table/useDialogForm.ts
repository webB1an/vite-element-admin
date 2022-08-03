import { ref, reactive, computed } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

// typing
import type { Article } from '@/api/models/articleModel'
import { EDialogType } from '../typing'

import { emptyObjKeys } from '@/utils/formatParams'

const defaultDialogForm = {
  id: '',
  createdAt: '',
  name: '',
  avatar: '',
  phone: '',
  city: '',
  account: '',
  email: '',
  status: ''
}

export default function () {
  const dialogFormVisible = ref(false)
  const dialogType = ref(EDialogType.add)
  const dialogFormRef = ref<FormInstance>()
  const dialogForm = reactive<Article>(defaultDialogForm)

  const dialogTitle = computed(() => {
    return dialogType.value === EDialogType.add ? '添加' : '编辑'
  })

  const dialogFormRules = reactive<FormRules>({
    name: [{ required: true, message: '请输入 name', trigger: 'blur' }],
    account: [{ required: true, message: '请输入 account', trigger: 'blur' }],
    phone: [{ required: true, message: '请输入 phone', trigger: 'blur' }],
    email: [{ type: 'email', required: true, message: '请输入 email', trigger: 'blur' }],
    city: [{ required: true, message: '请输入 city', trigger: 'blur' }],
    status: [{ required: true, message: '请选择 status', trigger: 'change' }]
  })

  const editorTableRow = (row: Article | any, type: EDialogType): void => {
    dialogType.value = type

    if (type === EDialogType.add) {
      emptyObjKeys(dialogForm)
      dialogForm.status = true
    } else {
      Object.assign(dialogForm, row)
    }
    dialogFormRef.value?.clearValidate()
    dialogFormVisible.value = true
  }

  const confirmEditorDialogForm = async (formEl: FormInstance | undefined, cb: any) => {
    if (!formEl) return
    await formEl.validate(async (valid) => {
      if (valid) {
        await cb()
        dialogFormVisible.value = false
      }
    })
  }

  return {
    dialogType,
    dialogFormRef,
    dialogFormVisible,
    dialogTitle,
    dialogForm,
    dialogFormRules,
    editorTableRow,
    confirmEditorDialogForm
  }
}
