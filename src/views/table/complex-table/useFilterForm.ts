import { ref, reactive, Ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

import type { NormalTableData, FilterForm, StarObj, StarOpt } from '../typing'
import { StarEnum } from '../typing'

export default function (
  tableData: Ref<NormalTableData[]>,
  originTableData: Ref<NormalTableData[]>
) {
  const starOpts = ref<StarOpt[]>(getStarOpts(StarEnum))

  const filterForm = reactive<FilterForm>({
    content: '',
    star: ''
  })

  const filterFormRef = ref<FormInstance>()

  const filterFormRules = reactive<FormRules>({
    content: [{ required: true, message: '请输入要搜索内容', trigger: 'blur' }],
    star: [
      {
        required: true,
        message: '请选择星级',
        trigger: 'change'
      }
    ]
  })

  const search = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid) => {
      if (valid) {
        tableData.value = originTableData.value
        if (filterForm.content === '' && filterForm.star === '') return

        tableData.value = tableData.value.filter(
          (row) => row.content === filterForm.content || row.star === filterForm.star
        )
      }
    })
  }

  return {
    starOpts,
    filterForm,
    filterFormRef,
    filterFormRules,
    search
  }
}

function getStarOpts(star: StarObj): StarOpt[] {
  const arr: StarOpt[] = []
  for (const key in star) {
    const starKey: any = key

    if (isNaN(starKey)) {
      arr.push({
        label: starKey,
        value: star[starKey]
      })
    }
  }
  return arr
}
