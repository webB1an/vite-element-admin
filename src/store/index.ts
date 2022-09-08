import { createStore } from 'vuex'

const dafaultState = {
  count: 0
}

const store = createStore({
  state: dafaultState,
  getters: {
    double: (state: typeof dafaultState) => state.count * 2
  },
  mutations: {
    ADD: (state: typeof dafaultState, payload: number) => {
      if (payload) {
        state.count += payload
      } else {
        state.count++
      }
    },
    SUB: (state: typeof dafaultState, payload: number) => {
      if (payload) {
        state.count -= payload
      } else {
        state.count--
      }
    }
  },
  actions: {
    TestActionCommit({ commit }, data: number) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('ADD', data)
          resolve(10)
        }, 2000)
      })
    },
    TestActionDispatch({ dispatch }, data: number) {
      dispatch('TestActionCommit', data)
    }
  }
})

export default store
