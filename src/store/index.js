import Vue from 'vue'
import Vuex from 'vuex'

import docs from './modules/docs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    docs
  }
})
