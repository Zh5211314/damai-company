import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/zhongchao/Home'
<<<<<<< master
=======
<<<<<<< HEAD
import Resigter from '@/zhongchao/Resigter'
import Logining from '@/zhongchao/logining'
>>>>>>> local

=======
import List from '@/zhanghuan/List'
import Details from '@/zhanghuan/Details'
import Selection from '@/zhanghuan/Selection'
>>>>>>> d163f235afe61416bfafd762cb677f5d6b47edcb
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
<<<<<<< master
      component: Home
=======
<<<<<<< HEAD
      component: Home,
    },
    {
      path: '/resigter',
      name: 'Resigter',
      component: Resigter,
    },
    {
      path: '/logining',
      name: 'Logining',
      component: Logining,
=======
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail',
      name: 'Details',
      component: Details
    },
    {
      path: '/select',
      name: 'Selection',
      component: Selection
>>>>>>> d163f235afe61416bfafd762cb677f5d6b47edcb
>>>>>>> local
    }
  ]
})
