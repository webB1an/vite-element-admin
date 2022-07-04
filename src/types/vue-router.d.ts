import 'vue-router'

export {}

declare module 'vue-router' {
    interface _RouteRecordBase {
    hidden?: boolean | string | number
  }
}
