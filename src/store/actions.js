/*
  通过mutation间接更新state多个方法对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SELLER_LIST,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SELLER_INFO,
  RECEIVE_SELLER_RATINGS,
  RECEIVE_SELLER_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqSellerList,
  reqUserInfo,
  reqLogout,
  reqSellerGoods,
  reqSellerInfo,
  reqSellerRatings
} from '@/api'

export default {
  //  异步获取地址值
  async getAddress ({ commit, state }) {
    const geohash = state.latitude + ',' + state.longitude
    //  异步发送ajax请求
    const result = await reqAddress(geohash)
    //  提交一个mutation
    result.code === 0 && commit(RECEIVE_ADDRESS, { address: result.data })
  },

  //  异步获取食品分类的数组
  async getCategorys ({ commit }) {
    //  异步发送ajax请求
    const result = await reqFoodCategorys()
    //  提交一个mutation
    result.code === 0 && commit(RECEIVE_CATEGORYS, { categorys: result.data })
  },

  //  异步获取商家列表
  async getSellerList ({ commit, state }) {
    const { latitude, longitude } = state
    //  异步发送ajax请求
    const result = await reqSellerList(latitude, longitude)
    //  提交一个mutation
    result.code === 0 && commit(RECEIVE_SELLER_LIST, { sellerList: result.data })
  },

  // 同步保存用户信息
  saveUserInfo ({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo })
  },

  // 异步获取用户session信息
  async getUserInfo ({ commit }) {
    const result = await reqUserInfo()
    result.code === 0 && commit(RECEIVE_USER_INFO, { userInfo: result.data })
  },

  // 异步退出
  async logout ({ commit }) {
    const result = await reqLogout()
    result.code === 0 && commit(RESET_USER_INFO)
  },

  // 异步获取商家商品信息
  async getSellerGoods ({ commit }, callback) {
    const result = await reqSellerGoods()
    result.code === 0 && commit(RECEIVE_SELLER_GOODS, { goods: result.data })
    callback && callback()
  },

  // 异步获取商家评价信息
  async getSellerRatings ({ commit }) {
    const result = await reqSellerRatings()
    result.code === 0 && commit(RECEIVE_SELLER_RATINGS, { ratings: result.data })
  },

  // 异步获取商家详情信息
  async getSellerInfo ({ commit }) {
    const result = await reqSellerInfo()
    result.code === 0 && commit(RECEIVE_SELLER_INFO, { seller: result.data })
  },

  // 同步更新商品数量
  updateFoodCount ({ commit }, { flag, food }) {
    flag === true && commit(INCREMENT_FOOD_COUNT, { food })
    flag === false && commit(DECREMENT_FOOD_COUNT, { food })
  }
}
