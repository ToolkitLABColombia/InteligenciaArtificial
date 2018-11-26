import Vue from 'vue'
import Vuex from 'vuex'

import app from '@/store/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    titulo: 'Toolkit'
  },
  modules: {
    app
  }
})

export default store
