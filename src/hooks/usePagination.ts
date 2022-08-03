import { reactive, ref } from 'vue'

export interface IQuery {
  page: number
  limit: number
}

export default function () {
  const total = ref(0)
  const query = reactive<IQuery>({
    page: 1,
    limit: 10
  })

  return {
    total,
    query
  }
}
