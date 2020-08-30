/*
  通过mutation间接更新state多个方法对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SELLER_LIST
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqSellerList
} from '@/api'

export default {
  //  异步获取地址值
  async getAddress ({ commit, state }) {
    const geohash = state.latitude + ',' + state.longitude
    //  异步发送ajax请求
    const result = await reqAddress(geohash)
    //  提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, { address })
    }
  },
  //  异步获取食品分类的数组
  async getCategorys ({ commit }) {
    //  异步发送ajax请求
    const result = await reqFoodCategorys()
    //  提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, { categorys })
    }
  },
  //  异步获取商家列表
  async getSellerList ({ commit, state }) {
    const { latitude, longitude } = state
    //  异步发送ajax请求
    const result = await reqSellerList(latitude, longitude)
    //  提交一个mutation
    if (result.code === 0) {
      const sellerList = result.data
      commit(RECEIVE_SELLER_LIST, { sellerList })
    }
  }
}
