import Vue from 'vue'
import Router from 'vue-router'
import MSite from '@/views/MSite/MSite'
import Search from '@/views/Search/Search'
import Personal from '@/views/Personal/Personal'
import Order from '@/views/Order/Order'
import Login from '@/views/Login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  //  所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
