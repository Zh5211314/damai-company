import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    sitCode:[]
  },
  mutations: {
    getSitcode (state,userSitCode) {
      state.sitCode = userSitCode
    }
  }
})
export default store
