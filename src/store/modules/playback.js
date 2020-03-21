import { make } from 'vuex-pathify'

import api from '@/services/api'
import socket from '@/services/socket'

export const state = {
  activeTrack: {
    title: 'I Will Survive',
    artist: 'Unknown'
  },
  playing: true
}

export const mutations = make.mutations(state)

export const actions = {
  async list ({ commit }) {
    const { data } = api.artist.list()
    commit('SET_ALL', data)
  },

  connect ({ commit }, { extensionId }) {
    // Retreive access token from store module auth
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTY5NDAzNDcyNGNkMmRmODEzMWU4ZDYiLCJ1c2VybmFtZSI6ImpvY2siLCJlbWFpbCI6ImpvaG4ud2lja0BleGFtcGxlLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTg0NjgwNDY1LCJleHAiOjE1ODUyODUyNjV9.vWzHG9cNhXetfbAzqKu6BJx0SnQnVGFZZVqugR6z76Y'
    socket.connect(accessToken, extensionId)
    socket.on('playback:statusChanged', payload => {
      commit('SET_PLAYING', payload.playing)
    })
    socket.on('playback:trackChanged', payload => {
      commit('SET_ACTIVE_TRACK', payload)
    })
  },

  next () {
    socket.emit('playback:next')
  },

  previous () {
    socket.emit('playback:previous')
  },

  toggleStatus () {
    socket.emit('playback:toggleStatus')
  },

  play (context, payload) {
    socket.emit('playback:play', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
