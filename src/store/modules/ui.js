import { make } from 'vuex-pathify'

const SET_IS_PLAYER_MODAL_ACTIVE = 'SET_IS_PLAYER_MODAL_ACTIVE'

export const state = {
  isPlayerModalActive: false
}

export const mutations = make.mutations(state)

export const actions = {
  openPlayer ({ commit, dispatch }) {
    commit(SET_IS_PLAYER_MODAL_ACTIVE, true)
    window.location = '#player'
    window.onhashchange = () => {
      if (!window.location.hash) {
        dispatch('closePlayer')
      }
    }
  },

  closePlayer ({ commit }) {
    commit(SET_IS_PLAYER_MODAL_ACTIVE, false)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
