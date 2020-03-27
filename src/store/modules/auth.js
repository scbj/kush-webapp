import { make } from 'vuex-pathify'

import api from '@/services/api'

export const state = {
  accessToken: '',
  statusMessage: ''
}

export const getters = {
  /**
   * Returns true if the user is authenticated.
   * @returns {Boolean}
   */
  isAuthenticated (state) {
    return !!state.accessToken
  }
}

export const mutations = make.mutations(state)

export const actions = {
  async login ({ commit }, { username, password }) {
    const { accessToken, error } = api.auth.login(username, password)

    if (error) {
      return commit('SET_STATUS_MESSAGE', error)
    }

    commit('SET_ACCESS_TOKEN', accessToken)
  },

  async logout () {
    localStorage.removeItem('vuex')
    window.location = '/login'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
