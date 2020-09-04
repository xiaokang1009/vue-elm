/*
  包含多个基于state的getter计算属性对象
 */
export default {
  totalCount (state) {
    return state.cartFoods.reduce((preTotalCount, food) => preTotalCount + food.count, 0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((preTotalPrice, food) => Math.floor((preTotalPrice + food.count * food.price) * 100) / 100, 0)
  },
  positiveSize (state) {
    return state.sellerRatings.reduce((positiveSize, rating) => positiveSize + (rating.reteType === 0 ? 1 : 0), 0)
  }
}
