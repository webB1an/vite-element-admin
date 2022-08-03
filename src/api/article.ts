import { fetch } from '@/utils/request'
import type { ArticleFetchListModel, ArticleFetchModel, Article } from './models/articleModel'

export function getList(query: any) {
  return fetch<ArticleFetchListModel>({
    url: '/users',
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    params: { ...query, sortBy: 'createdAt', order: 'desc' }
  })
}

export function updateItem(query: Article) {
  return fetch<ArticleFetchModel>({
    url: `/users/${query.id}`,
    method: 'put',
    data: query
  })
}

export function addItem(query: any) {
  return fetch<ArticleFetchModel>({
    url: '/users',
    method: 'post',
    data: query
  })
}

export function deleteItem(id: string | number) {
  return fetch<ArticleFetchModel>({
    url: `/users/${id}`,
    method: 'delete'
  })
}
