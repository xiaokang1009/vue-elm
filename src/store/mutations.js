/*
  直接更新state多个方法对象
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SELLER_LIST,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SELLER_GOODS,
  RECEIVE_SELLER_INFO,
  RECEIVE_SELLER_RATINGS,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  RESET_CART_LIST
} from './mutation-types'

export default {
  // 更新地址信息
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  },

  // 更新轮播图
  [RECEIVE_CATEGORYS] (state, { categorys }) {
    state.categorys = categorys
  },

  // 更新商家列表
  [RECEIVE_SELLER_LIST] (state, { sellerList }) {
    state.sellerList = sellerList
  },

  // 更新用户信息（自动登录）
  [RECEIVE_USER_INFO] (state, { userInfo }) {
    state.userInfo = userInfo
  },

  // 更新用户信息（登出）
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },

  // 更新商家商品信息
  [RECEIVE_SELLER_GOODS] (state, { goods }) {
    state.sellerGoods = goods
  },

  // 更新商家评价信息
  [RECEIVE_SELLER_RATINGS] (state, { ratings }) {
    state.sellerRatings = ratings
  },

  // 更新商家详情信息
  [RECEIVE_SELLER_INFO] (state, { seller }) {
    state.sellerInfo = seller
  },

  // 增加商品数量
  [INCREMENT_FOOD_COUNT] (state, { food }) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food) // 把food添加到购物车列表中
    } else {
      food.count++
    }
  },

  // 减少商品数量
  [DECREMENT_FOOD_COUNT] (state, { food }) {
    food.count && food.count--
    food.count === 0 && state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
  },

  // 清空购物车
  [RESET_CART_LIST] (state) {
    // 先清除购物车中food.count属性
    // eslint-disable-next-line no-return-assign
    state.cartFoods.forEach(food => food.count = 0)
    state.cartFoods = []
  }
}
