import { defineStore } from 'pinia'
import { CookiesGet, CookiesSet } from '@/utils/cookie'

export default defineStore('app', {
  state: () => ({
    siderbar: {
      active: CookiesGet('siderbarStatus') === '1'
    }
  }),
  getters: {
    // menuActive: (state) => state.siderbar.active
  },
  actions: {
    toggleSidebar() {
      this.siderbar.active = !this.siderbar.active
      CookiesSet('siderbarStatus', this.siderbar.active ? '1' : '0')
    }
  }
})
