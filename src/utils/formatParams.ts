import { pickBy } from 'lodash-es'

interface obj {
  [propName: string]: any
}

export function formatParams(params: obj) {
  return pickBy(params)
}

export function emptyObjKeys(params: obj) {
  for (const key in params) {
    params[key] = ''
  }
}
