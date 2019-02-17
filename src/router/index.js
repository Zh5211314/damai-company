import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/zhongchao/Home'
import Xue from '@/xueyanbo/Xue'
import Xueone from '@/xueyanbo/Xueone'
import Xuel from '@/xueyanbo/Xuel'
import Move from "../xueyanbo/views/Move";
import Movie from "../xueyanbo/views/Movie";
import Xuetwo from "../xueyanbo/Xuetwo";
import Xuetree from "../xueyanbo/Xuetree";
import Error from "../xueyanbo/Error";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
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
    }
  ]
})
