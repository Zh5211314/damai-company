import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/zhongchao/Home'
import List from '@/zhanghuan/List'
import Details from '@/zhanghuan/Details'
import Selection from '@/zhanghuan/Selection'
import Order from '@/mengmeng/Order'
import OrderPayment from '@/mengmeng/OrderPayment'
import OrderWinxin from '@/mengmeng/OrderWinxin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
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
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/orderpayment',
      name: 'OrderPayment',
      component: OrderPayment
    },
    {
      path: '/orderwinxin',
      name: 'OrderWinxin',
      component: OrderWinxin
    }
  ]
})
