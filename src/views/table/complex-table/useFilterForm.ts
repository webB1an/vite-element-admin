import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

import type { Article } from '@/api/models/articleModel'

export default function () {
  const filterForm = reactive<Pick<Article, 'name' | 'account' | 'status'>>({
    name: '',
    account: '',
    status: ''
  })

  const filterFormRef = ref<FormInstance>()

  const filterFormRules = reactive<FormRules>({})

  const search = async (formEl: FormInstance | undefined, cb: any) => {
    if (!formEl) return
    await formEl.validate((valid) => {
      if (valid) {
        cb()
      }
    })
  }

  return {
    filterForm,
    filterFormRef,
    filterFormRules,
    search
  }
}
