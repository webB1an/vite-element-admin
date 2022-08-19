export {}
declare module 'sortablejs'

type Data = Record<string, unknown>

export interface LoadingOptions extends Data {
  text?: string
  background?: string
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $loading: {
      show: (options?: LoadingOptions) => void
      close: () => void
    }
  }
}
