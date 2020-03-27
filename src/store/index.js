import Vue from 'vue'
import Vuex from 'vuex'
import VuexPathify from 'vuex-pathify'
import VuexPersist from 'vuex-persist'

import * as modules from '@/store/modules'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  store: localStorage
})

export default new Vuex.Store({
  modules,
  plugins: [
    VuexPathify.plugin,
    vuexLocalStorage.plugin
  ]
})
