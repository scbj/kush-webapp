import { make } from 'vuex-pathify'

const state = {
  isOpened: false,
  activeComponent: null
}

const mutations = make.mutations(state)

const actions = {
  open ({ commit }, payload) {
    commit('SET_IS_OPENED', true)
    commit('SET_ACTIVE_COMPONENT', payload.component)
  },

  close ({ commit }) {
    commit('SET_IS_OPENED', false)
    commit('SET_ACTIVE_COMPONENT', null)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
