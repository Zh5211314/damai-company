import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/zhongchao/Home'
<<<<<<< HEAD
import Xue from '@/xueyanbo/Xue'
import Xueone from '@/xueyanbo/Xueone'
import Xuel from '@/xueyanbo/Xuel'
import Move from "../xueyanbo/views/Move";
import Movie from "../xueyanbo/views/Movie";
import Xuetwo from "../xueyanbo/Xuetwo";
import Xuetree from "../xueyanbo/Xuetree";
import Error from "../xueyanbo/Error";
=======
import Resigter from '@/zhongchao/Resigter'
import Logining from '@/zhongchao/logining'
import List from '@/zhanghuan/List'
import Details from '@/zhanghuan/Details'
import Selection from '@/zhanghuan/Selection'
import Order from '@/mengmeng/Order'
import OrderPayment from '@/mengmeng/OrderPayment'
import OrderWinxin from '@/mengmeng/OrderWinxin'
import Yan from '@/yanyan/Yan'
>>>>>>> 44fcc91dbb3958678c0dcee8e9c74c2dec6d2927
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
<<<<<<< HEAD
      path:'/xue',
      name:'Xue',
      component:Xue,
      children:[
      {
        path:'',
        component:Move
      },
      {
        path:'movie',
        component:Movie
      }
      ]
    },
    {
      path:'/xuel',
      name:'xuel',
      component:Xuel,
      children:[
        {
          path:'',
          component:Move
        },
        {
          path:'movie',
          component:Movie
        }
      ]
    },
    {
      path:'/xueone',
      name:'xueone',
      component:Xueone,
      children:[
        {
          path:'',
          component:Move
        },
        {
          path:'movie',
          component:Movie
        }
      ]
    },
    {
      path:'/xuetwo',
      name:'xuetwo',
      component:Xuetwo,
      children:[
        {
          path:'',
          component:Move
        },
        {
          path:'movie',
          component:Movie
        }
      ]
    },
    {
      path:'/xuetree',
      name:'xuetree',
      component:Xuetree,
      children:[
        {
          path:'',
          component:Move
        },
        {
          path:'movie',
          component:Movie
        }
      ]
    },
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        title: '404'
      }
    },
    {
      path: '*',
      // redirect: '/error',
      // redirect: {path: '/error'},
      // redirect: {name: 'error'},
      redirect (to) {
        var isRouer = routerArr.every((item) => {
          return item === to.path.slice(0)
        })
        if (!isRouer) {
          return '/error'
        }
      }
=======
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
      path: '/resigter',
      name: 'Resigter',
      component: Resigter,
    },
    {
      path: '/logining',
      name: 'Logining',
      component: Logining,
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
    },
	{
      path: '/yan',
      component: Yan
	}
  
  ],
  //路由跳转时滚动条归零
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
>>>>>>> 44fcc91dbb3958678c0dcee8e9c74c2dec6d2927
    }
  }
})
