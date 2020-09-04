import Vue from 'vue'
import Router from 'vue-router'
// import MSite from '@/views/MSite/MSite'
// import Search from '@/views/Search/Search'
// import Personal from '@/views/Personal/Personal'
// import Order from '@/views/Order/Order'
import Login from '@/views/Login/Login'
import Seller from '@/views/Seller/Seller'
import SellerGoods from '@/views/Seller/SellerGoods/SellerGoods'
import SellerRatings from '@/views/Seller/SellerRatings/SellerRatings'
import SellerInfo from '@/views/Seller/SellerInfo/SellerInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  //  所有路由
  routes: [
    // 首页路由
    {
      path: '/msite',
      component: () => import('./views/MSite/MSite'), // 路由懒加载
      meta: {
        showFooter: true
      }
    },
    // 搜索路由
    {
      path: '/search',
      component: () => import('./views/Search/Search'),
      meta: {
        showFooter: true
      }
    },
    //  订单路由
    {
      path: '/order',
      component: () => import('./views/Order/Order'),
      meta: {
        showFooter: true
      }
    },
    //  个人中心路由
    {
      path: '/personal',
      component: () => import('./views/Personal/Personal'),
      meta: {
        showFooter: true
      }
    },
    //  登录路由
    {
      path: '/login',
      component: Login
    },
    //  商家路由
    {
      path: '/seller',
      component: Seller,
      //  子路由
      children: [
        // 点餐路由
        {
          path: '/seller/goods',
          component: SellerGoods
        },
        // 评价路由
        {
          path: '/seller/ratings',
          component: SellerRatings
        },
        // 详情路由
        {
          path: '/seller/info',
          component: SellerInfo
        },
        {
          path: '',
          redirect: '/seller/goods'
        }
      ]
    },
    //  默认路由
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
