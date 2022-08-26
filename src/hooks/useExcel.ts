import { read, utils, writeFile } from 'xlsx'
import type { WorkSheet, WorkBook, WritingOptions } from 'xlsx'
import type { Obj } from '@/utils/formatParams'

interface ExportParams<T> {
  data: T[]
  header?: string[]
  filename?: string
  autoWidth?: boolean
  opts?: WritingOptions
}

const DEF_FILE_NAME = 'export-list'

export function useExportExcel<T = any>({
  data,
  header,
  filename,
  autoWidth = false,
  opts = { bookType: 'xls' }
}: ExportParams<T>) {
  filename = `${filename || DEF_FILE_NAME}.${opts.bookType}`

  const ws: WorkSheet = utils.json_to_sheet([])

  const wb: WorkBook = {
    SheetNames: [filename],
    Sheets: {
      [filename]: ws
    }
  }

  if (autoWidth) {
    ws['!cols'] = autoFitColumn(data)
  }

  if (header && header.length > 0) {
    utils.sheet_add_aoa(ws, [header])
    utils.sheet_add_json(ws, data, { origin: 'A2', skipHeader: true })
  } else {
    utils.sheet_add_json(ws, data)
  }

  utils.book_append_sheet(wb, ws)

  writeFile(wb, filename, opts)
}

export async function useUploadExcel(file: File) {
  const ab = await file.arrayBuffer()
  const wb = read(ab)
  const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) as Obj[]

  const header: string[] = data.length > 0 ? Object.keys(data[0]) : []

  return {
    data,
    header
  }
}

function autoFitColumn(json: any[]) {
  const maxLength: number[] = []
  json.forEach((jsonData) => {
    Object.values(jsonData).forEach((v, i) => {
      let len
      const value = v as string
      if (value == null) {
        len = 10
      } else if (value.toString().charCodeAt(0) > 255) {
        len = value.toString().length * 2
      } else if (typeof value === 'number') {
        len = 10
      } else {
        len = value.toString().length
      }
      maxLength[i] = Math.max(maxLength[i] || 0, len)
    })
  })

  return maxLength.map((w: number) => ({ width: w }))
}
