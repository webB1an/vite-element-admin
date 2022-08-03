export interface BasePageParams {
  pageSize: number
  page: number
}

export interface BaseFechResultItem<T> {
  code: string
  msg: string
  data: T
}

export interface BaseFechResultList<T> {
  code: string
  msg: string
  data: {
    total: number
    list: T[]
  }
}
