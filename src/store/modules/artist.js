import { make } from 'vuex-pathify'

import api from '@/services/api'

export const state = {
  all: []
}

export const mutations = make.mutations(state)

export const actions = {
  async list ({ commit }) {
    const { data } = api.artist.list()
    commit('SET_ALL', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
