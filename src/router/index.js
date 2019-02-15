import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/zhongchao/Home'
import Yan from '@/yanyan/Yan'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/yan',
      component: Yan
    }
  ]
})
