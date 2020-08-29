<template>
  <section class="order">
    <Header title="订单列表"/>
    <div class="order-no-login">
      <img src="./images/person.png" >
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </div>
  </section>
</template>

<script>
import Header from '@/components/header/header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
  .order
    width 100%
    .order-no-login
      padding-top 150px
      width 60%
      margin 0 auto
      text-align center
      >img
        display block
        width 100%
        height 30%
      >h3
        padding 10px 0
        font-size $font-size-large-
        color $font-color-gray-ss
      >button
        display inline-block
        background-image $bc-img
        font-size $font-size-medium
        color $bc-white-s
        border 0
        outline none
        border-radius 5px
        padding 10px 20px
</style>
