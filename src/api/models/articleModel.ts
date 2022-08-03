import { BaseFechResultList, BaseFechResultItem } from './baseModel'

export interface Article {
  createdAt: Date | string
  name: string
  avatar: string
  phone: string
  city: string
  account: string
  originAccount?: string
  email: string
  editor?: boolean
  status: string | boolean
  id: string
}

export type ArticleFetchListModel = BaseFechResultList<Article>
export type ArticleFetchModel = BaseFechResultItem<Article>
