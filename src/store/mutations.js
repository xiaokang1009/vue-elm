/*
  直接更新state多个方法对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SELLER_LIST,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SELLER_GOODS,
  RECEIVE_SELLER_INFO,
  RECEIVE_SELLER_RATINGS
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
  }
}
