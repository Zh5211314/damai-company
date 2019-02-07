// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Local from '@/lib/local'
import axios from 'axios'
import vueAxios from 'vue-axios'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$url = 'https://www.easy-mock.com/mock/5c409e73fe5f685c94744467/damai/'
Vue.use(ElementUI)
Vue.use(vueAxios, axios)
Vue.use(Local)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
