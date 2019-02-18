import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    sitCode:[],
    off1:false
  },
  mutations: {
    getSitcode (state,userSitCode) {
      state.sitCode = userSitCode
    },
    changeLogin (state,loginBtn) {
      state.off1 = loginBtn
    }
  }
})
export default store
