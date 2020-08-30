/*
  直接更新state多个方法对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SELLER_LIST
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SELLER_LIST] (state, { sellerList }) {
    state.sellerList = sellerList
  }
}
