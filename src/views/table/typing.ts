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

// export interface FilterForm {
//   name: string
//   account: string
//   status: string
// }

export enum EDialogType {
  editor = 1,
  add
}
