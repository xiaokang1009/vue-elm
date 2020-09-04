<template>
  <div class="seller">
    <seller-header/>
    <nav class="tab">
      <div class="tab-item">
        <router-link to="/seller/goods">点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller/info">商家</router-link>
      </div>
    </nav>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import SellerHeader from '@/components/SellerHeader/SellerHeader'
export default {
  mounted () {
    this.$store.dispatch('getSellerInfo')
  },
  components: {
    SellerHeader
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
.seller
  background $bc-white-s
  width 100%
  .tab
    display flex
    height 40px
    line-height 40px
    top-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align center
      font-size $font-size-medium
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color $blue
          font-weight bold
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background $blue
</style>
