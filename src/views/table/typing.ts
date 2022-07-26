export interface NormalTableData {
  id: number
  date: string
  originCtn?: string
  content: string
  star: number
  reading: number
  editor?: boolean
}

export interface FruitTableData {
  name: string
  apple: string
  banana: string
  orange: string
}

export interface FilterForm {
  content: string
  star: number | string
}

export enum StarEnum {
  One = 1,
  Two,
  Three,
  Four,
  Five
}

export interface StarObj {
  [propName: string]: string | number
}

export interface StarOpt {
  label: string
  value: string | number
}
